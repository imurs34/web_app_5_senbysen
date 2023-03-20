import React, { useState, useEffect } from 'react';
import pdfmap from '../pdfmap1.json';
import { useAtom } from 'jotai';
import { useSelector } from 'react-redux';
import { paragraphAtom, activityAtom } from '../atom';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { highlightPlugin, Trigger } from '@react-pdf-viewer/highlight';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/highlight/lib/styles/index.css';
import pdfmap2 from '../pdfmap2.json';
import map1PdfBars from '../map1PdfBars.json';
import pdf2copy from '../map2PdfBars.json';
import blockColours from '../constants/map2ColourBlock';
import sectionBlock from '../constants/map1ColourBlock';

function PdfView2({ width }) {
  const [paragraphs, setParagraphAtom] = useAtom(paragraphAtom);
  const [current] = useAtom(activityAtom);
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage } = pageNavigationPluginInstance;
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: () => [],
  });

  const [areas, setAreas] = React.useState([]);
  const [ref, setRef] = useState(null);

  const map1Toggle = useSelector((state) => state.toggle.map1);
  const map2Toggle = useSelector((state) => state.toggle.map2);

  useEffect(() => {
    try {
      if (paragraphs) {
        let array = [];
        pdfmap.forEach((item) => {
          if (paragraphs.paragraph.find((element) => element === item.id)) {
            if (paragraphs?.paragraph[0] && Number(item.id) == paragraphs?.paragraph[0]) {
              jumpToPage(item.pageIndex - 1);
            }
            if (item?.highlights && item.highlights.length > 0)
              array.push({ ...item?.highlights[0], pageIndex: item.pageIndex - 1 });
          }
        });
        setAreas(array);
      }
    } catch (error) {
      console.log('error  ', error.message);
    }
  }, [paragraphs]);

  useEffect(() => {
    const found = pdfmap2.find((item) => item.slide_id === current.slide);
    if (found) setParagraphAtom(found);
  }, [current]);

  const clicked = (index) => {
    pdfmap.map((item) => {
      if (Number(item.id) == paragraphs.paragraph[index]) {
        jumpToPage(item.pageIndex - 1);
      }
    });
  };

  useEffect(() => {
    const el = document.getElementById('highlight-area');
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          block: 'center',
          // inline: "center",
        });
      }, 500);
    }
  }, [ref]);

  const [getZoom, setZoom] = useState(1);

  const handleZoom = (e) => setZoom(e.scale);

  const pdfBlockBorderWitdh = 6 * getZoom;
  const sectionBars = 16 * getZoom;
  const paragraphBars = 8 * getZoom;

  const paragraphColour = (array, colour, props) =>
    pdf2copy
      .filter((item, index) => array.includes(item.id) && props.pageIndex === item.pageIndex - 1)
      .map((area, idx) => (
        <div
          style={Object.assign({}, props.getCssProperties(area.highlights[0], props.rotation), {
            [area.highlights[0].left > 50
              ? 'borderRight'
              : 'borderLeft']: `${pdfBlockBorderWitdh}px solid ${colour}`,
            [area.highlights[0].left > 50 && 'marginLeft']: `${paragraphBars}px`,
            [area.highlights[0].left < 50 && 'marginLeft']: `-${paragraphBars}px`,
          })}
        />
      ));

  const sectionColour = (array, colour, props) =>
    map1PdfBars
      .filter((item, index) => array.includes(item.id) && props.pageIndex === item.pageIndex - 1)
      .map((area, idx) => (
        <div
          key={idx}
          style={Object.assign({}, props.getCssProperties(area.highlights[0], props.rotation), {
            [area.highlights[0].left > 50
              ? 'borderRight'
              : 'borderLeft']: `${pdfBlockBorderWitdh}px solid ${colour}`,
            [area.highlights[0].left > 50 && 'marginLeft']: `${sectionBars}px`,
            [area.highlights[0].left < 50 && 'marginLeft']: `-${sectionBars}px`,
          })}
        />
      ));

  const highlightColour = (array, colour, props) =>
    pdfmap
      .filter((item, index) => array.includes(item.id) && props.pageIndex === item.pageIndex - 1)
      .map((area, idx) => (
        <div
          key={idx}
          style={Object.assign(
            {},
            {
              background: colour,
              opacity: 0.18,
              mixBlendMode: 'multiply',
            },
            props.getCssProperties(area.highlights[0], props.rotation),
          )}
        />
      ));

  const renderHighlights = (props) => (
    <div>
      {areas
        .filter((area) => area.pageIndex === props.pageIndex)
        .map((area, idx) => (
          <div style={{ display: 'flex' }} key={idx}>
            <div
              className="highlight-area z-10"
              id="highlight-area"
              ref={(ref) => setRef(ref)}
              style={Object.assign(
                {},
                {
                  background: 'yellow',
                  opacity: 0.18,
                  mixBlendMode: 'multiply',
                },
                props.getCssProperties(area, props.rotation),
              )}
            />
          </div>
        ))}

      {/* MAP1 */}
      {map1Toggle &&
        sectionBlock.map((item, index) => sectionColour(item.jsonIndex, item.colour, props))}

      {/* MAP2 */}
      {map2Toggle && (
        <>
          {blockColours.map((item, index) => paragraphColour(item.paragraph, item.colour, props))}
        </>
      )}
    </div>
  );

  const highlightPluginInstance = highlightPlugin({
    renderHighlights,
    trigger: Trigger.None,
  });

  return (
    <div
      className={`pdfview m-auto w-[${
        width - 20
      }rem] overflow-auto h-full items-center flex justify-center relative`}
    >
      <div className={` w-full h-[100vh]  overflow-auto  flex-col `}>
        <div className={` w-[90%] m-auto  h-[90vh]  overflow-auto  flex-col `}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            ></div>
            <Viewer
              fileUrl="/pdfs/visifit.pdf"
              defaultScale={SpecialZoomLevel.PageFit}
              onZoom={handleZoom}
              plugins={[
                highlightPluginInstance,
                pageNavigationPluginInstance,
                defaultLayoutPluginInstance,
              ]}
            />
          </Worker>
        </div>
        <div className={`flex flex-col text-white ml-12  mt-2 text-sm `}>
          {(() => {
            if (paragraphs) {
              if (paragraphs.sections) {
                let sections = paragraphs.sections.replace(/'/g, '"'); //replacing all ' with "
                let scores = paragraphs.scores;
                sections = JSON.parse(sections);

                let buttons = [];
                for (let i = 0; i < sections.length; i++) {
                  let para = '';
                  pdfmap.map((item) => {
                    if (Number(item.id) == paragraphs.paragraph[i]) {
                      para = item.paragraphs.split(' ').slice(0, 7).join(' ');
                    }
                  });

                  buttons.push(
                    <div className="flex items-center my-1" key={i}>
                      <div
                        onClick={() => clicked(i)}
                        type="button"
                        className={`${
                          scores[i] < 0.7 ? 'bg-yellow-500' : 'bg-rose-800'
                        } text-white w-44  py-3  cursor-pointer rounded-lg text-center font-extrabold font-sans mr-3`}
                      >
                        {sections[i]}
                      </div>
                      <span>{para}...</span>
                    </div>,
                  );
                }

                return buttons;
              }
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default PdfView2;

const renderToolbar = (Toolbar) => (
  <Toolbar>
    {(slots) => {
      const { CurrentPageInput, CurrentScale, GoToNextPage, GoToPreviousPage, ZoomIn, ZoomOut } =
        slots;
      return (
        <div className="flex justify-center w-full">
          <div>
            <GoToPreviousPage />
          </div>
          <div className="w-11">
            <CurrentPageInput />
          </div>
          <div>
            <GoToNextPage />
          </div>
          <div className="flex items-center border-l border-solid border-white ml-2">
            <ZoomOut />
            <CurrentScale />
            <ZoomIn />
          </div>
        </div>
      );
    }}
  </Toolbar>
);
