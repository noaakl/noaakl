import React from "react";
import {Accordion, AccordionItem} from "carbon-components-react";
import './About.css'
const About = () => {
  return<div>
      <img src="https://user-images.githubusercontent.com/16198896/114301821-0653e000-9acf-11eb-923d-baeec7ba80dc.png" alt="new"/>
      <h1>map-my-shifter</h1>
      <h3>STIX-Shifter Connector's Mapping Builder</h3>
      <Accordion align='start'>

          <AccordionItem title="Introduction" open>
              The map-my-shifter (MMS) project provides a visual way for building mapping files for <a href={"https://github.com/opencybersecurityalliance/stix-shifter"}>STIX-Shifter</a> project.
              <ul className="first-ul">
                  <li>
                      - From STIX pattern mapping - When building the data source query from STIX query, the STIX fields, for examples `file:name`, is mapped to the target data source's field. <a href={"https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-2-edit-the-from_stix_map-json-files"}>Read more...</a>
                  </li>
                  <li>
                      - To STIX object mapping - When results object is back from the data source, this object should be displayed in the final results as STIX object. For examples {'{'}"filename": "xxxxx"}  should be translated to STIX object of type `file`. <a href={"https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-4-edit-the-to_stix_map-json-file"}>Read more...</a>
                  </li>
              </ul>
          </AccordionItem>
          <AccordionItem title="Use-cases" open>
              <ul className="second-ul">
                  <li>
                      MMS is a static client side app, there is no backend involved, except from serving the static content. It is built with <a href={"https://reactjs.org"}>ReactJS</a> library, and designed using <a href={"https://www.carbondesignsystem.com"}>Carbon Design System</a> components.
                  </li>
              </ul>
              <p>

              </p>
          </AccordionItem>
          <AccordionItem title="Devlopment" open>
              <ul className="second-ul">
                  <li>
                      - Create mapping file from scratch.
                  </li>
                  <li>
                      - Load existing mapping file, edit the file and save it to a new file.
                  </li>
              </ul>
          </AccordionItem>
          <AccordionItem title="Authors" open>
              <ul className="second-ul">
                  <li>
                      <a href={"https://github.com/barvhaim"}>Bar Haim</a>
                  </li>
                  <li>
                      <a href={"https://github.com/idohersko"}>Ido Hersko</a>
                  </li>
              </ul>
          </AccordionItem>
          <AccordionItem title="Licensing" open>
              <ul className="second-ul">
                  <li>
                      map-my-shifter is licensed under the Apache License, Version 2.0. See  <a href={"https://github.com/barvhaim/map-my-shifter/blob/master/LICENSE"}>LICENSE</a> for the full license text.
                  </li>
              </ul>
          </AccordionItem>
      </Accordion>

      <p className="first-p">
          Built with <span className="heart">❤</span> from <a href={"https://www.research.ibm.com/haifa/ccoe/"}>IBM Cyber Security Center of Excellence (CCoE)</a>
      </p>

  </div>;
};

export default About;
