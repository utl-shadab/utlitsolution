import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MixedRealityIcon from '../../assets/windows.png';
import BigDataIcon from '../../assets/front-end.png';
import AiIcon from '../../assets/backend.png';
import ComputerVisionIcon from '../../assets/illustration.png';
import IotIcon from '../../assets/app-development.png';
import BlockchainIcon from '../../assets/qa.png';
import OttIcon from '../../assets/ott.png';
import CloudIcon from '../../assets/cloud-computing.png';
import CMSIcon from '../../assets/technologies/cms/cms.png';
import DevopsIcon from '../../assets/devops.png';
import './Trends.css'; 
import HtmlLogo from '../../assets/technologies/frontend/html.svg';
import CssLogo from '../../assets/technologies/frontend/css.svg';
import JavaScriptLogo from '../../assets/technologies/frontend/javascript-logo.svg';
import ReactLogo from '../../assets/technologies/frontend/react-js-logo.svg';
import VueLogo from '../../assets/technologies/frontend/vuejs-logo.svg';
import AngularLogo from '../../assets/technologies/frontend/angular-logo.svg';
import EmberLogo from '../../assets/technologies/frontend/ember-logo.svg';
import MeteorLogo from '../../assets/technologies/frontend/meteor.svg';
// backend 
import Cplus from '../../assets/technologies/backend/c-plus-plus.svg';
import Dotnet from '../../assets/technologies/backend/dot-net-logo.svg';
import Nodejs from '../../assets/technologies/backend/node-js-logo-small.svg';
import Python from '../../assets/technologies/backend/python_1.svg';
import PHP from '../../assets/technologies/backend/php-logo.svg';
import Java from '../../assets/technologies/backend/java-logo.svg';
import Go from '../../assets/technologies/backend/go-logo-blue.svg';
// ui ux 
import PhotoshopIcon from '../../assets/technologies/uiux/photoshop.png';
import FigmaIcon from '../../assets/technologies/uiux/figma.png';
import AfterEffectsIcon from '../../assets/technologies/uiux/after-effects.png';
import IllustratorIcon from '../../assets/technologies/uiux/illustrator.png';
import XDIcon from '../../assets/technologies/uiux/xd.png';
import PremiereIcon from '../../assets/technologies/uiux/premiere-pro.png';
import CorelIcon from '../../assets/technologies/uiux/draw.png';
import BlenderIcon from '../../assets/technologies/uiux/blender.png';
// mobile 
import AndroidIcon from '../../assets/technologies/mobile/android-logo.svg';
import IosIcon from '../../assets/technologies/mobile/ios-logo.svg';
import FlutterIcon from '../../assets/technologies/mobile/flutter-logo.svg';
import ReactNativeIcon from '../../assets/technologies/mobile/react-native-logo.svg';
import SwiftIcon from '../../assets/technologies/mobile/swift.png';
import KotlinIcon from '../../assets/technologies/mobile/Kotlin_Icon.png';
// testing 
import SeleniumIcon from '../../assets/technologies/testing/selenium_logo.png';
import JestIcon from '../../assets/technologies/testing/Jest.svg';
import CypressIcon from '../../assets/technologies/testing/cypress.png';
import JunitIcon from '../../assets/technologies/testing/junit.png';
import KatalonIcon from '../../assets/technologies/testing/katalon-logo.png';
import JasmineIcon from '../../assets/technologies/testing/jasmine.svg';
import AppiumIcon from '../../assets/technologies/testing/appium.svg';
import TestRailIcon from '../../assets/technologies/testing/testrail.svg';
import TricentisIcon from '../../assets/technologies/testing/tricentis.png';
import RanorexIcon from '../../assets/technologies/testing/ranorex.png';
// desktop
import ElectronIcon from '../../assets/technologies/desktop/electron.svg';
import ObjectiveCIcon from '../../assets/technologies/desktop/objective-c.svg';
import CsharpIcon from '../../assets/technologies/desktop/c-sharp-logo.svg';
import PythonIcon from '../../assets/technologies/desktop/python_1.svg';
import JavaIcon from '../../assets/technologies/backend/java-logo.svg';
import CplusIcon from '../../assets/technologies/backend/c-plus-plus.svg';
// platform 
import Dynamic from '../../assets/technologies/platform/ms-dynamics-365.svg';
import PowerBI from '../../assets/technologies/platform/power-bi-2020.svg';
import Salesforce from '../../assets/technologies/platform/salesforce.svg';
import SAP from '../../assets/technologies/platform/sap.svg';
import SharePoint from '../../assets/technologies/platform/sharepoint-logo-vertical.svg';
import PowerShell from '../../assets/technologies/platform/PowerShell.png';
import ServiceNow from '../../assets/technologies/platform/servicenow.svg';
import QRadar from '../../assets/technologies/platform/qradar.svg';
// cloud 
import Azure from '../../assets/technologies/clouds/azure-full.svg';
import AWS from '../../assets/technologies/clouds/aws.svg';
import GCP from '../../assets/technologies/clouds/google-cloud-logo.svg';
import DigitalOcean from '../../assets/technologies/clouds/digital-ocean.svg';
import Rackspace from '../../assets/technologies/clouds/rackspace-horizontal.svg';
import Alibaba from '../../assets/technologies/clouds/alibaba.png';
import Oracle from '../../assets/technologies/clouds/Oracle_logo.png';
// cms 
import Wordpress from "../../assets/technologies/cms/wordpress.png";
import Shopify from "../../assets/technologies/cms/shopify.png";
import Drupal from "../../assets/technologies/cms/drupal.png";
import magento from "../../assets/technologies/cms/magento.png";
// devops 
import Docker from "../../assets/technologies/devops/docker.svg";
import Kubernetes from "../../assets/technologies/devops/kubernetes-logo.svg";
import Jenkins from "../../assets/technologies/devops/Jenkins_logo.svg";
import Chef from "../../assets/technologies/devops/chef.svg";
import Puppet from "../../assets/technologies/devops/puppet.svg";
import Packer from "../../assets/technologies/devops/packer-logo.svg";
import Saltstack from "../../assets/technologies/devops/saltstack.svg";
import Terraform from "../../assets/technologies/devops/terraform-logo.svg";
import Apache from "../../assets/technologies/devops/apache-mesos-logo-vertical.svg";
import Nginx from "../../assets/technologies/devops/Nginx_logo.svg";


const frontendServices = [
  { name: 'HTML', logo: HtmlLogo },
  { name: 'CSS', logo: CssLogo },
  { name: 'JavaScript', logo: JavaScriptLogo },
  { name: 'React', logo: ReactLogo },
  { name: 'Vue', logo: VueLogo },
  { name: 'Angular', logo: AngularLogo },
  { name: 'Ember', logo: EmberLogo },
  { name: 'Meteor', logo: MeteorLogo },
];
const backendServices = [
  { name: 'Node.js', logo: Nodejs },
  { name: 'Dotnet', logo: Dotnet },
  { name: 'Python', logo: Python },
  { name: 'PHP', logo: PHP },
  { name: 'Java', logo: Java },
  { name: 'Go', logo: Go },
  { name: 'Cplus', logo: Cplus },
];
const uiuxServices = [
  { name: 'Photoshop', logo: PhotoshopIcon },
  { name: 'Figma', logo: FigmaIcon },
  { name: 'AfterEffects', logo: AfterEffectsIcon },
  { name: 'Illustrator', logo: IllustratorIcon },
  { name: 'XD', logo: XDIcon },
  { name: 'Premiere', logo: PremiereIcon },
  { name: 'Corel', logo: CorelIcon },
  { name: 'Blender', logo: BlenderIcon },
];
const mobileServices = [
  { name: 'Android', logo: AndroidIcon },
  { name: 'Ios', logo: IosIcon },
  { name: 'Flutter', logo: FlutterIcon },
  { name: 'React Native', logo: ReactNativeIcon },
  { name: 'Swift', logo: SwiftIcon },
  { name: 'Kotlin', logo: KotlinIcon },
 
];
const testingServices = [
  { name: 'Selenium', logo: SeleniumIcon },
  { name: 'Jest', logo: JestIcon },
  { name: 'Cypress', logo: CypressIcon },
  { name: 'Junit', logo: JunitIcon },
  { name: 'Katalon', logo: KatalonIcon },
  { name: 'Jasmine', logo: JasmineIcon },
  { name: 'Appium', logo: AppiumIcon },
  { name: 'TestRail', logo: TestRailIcon },
  { name: 'Tricentis', logo: TricentisIcon },
  { name: 'Ranorex', logo: RanorexIcon },
];
const desktopServices = [
  { name: 'Electron', logo: ElectronIcon },
  { name: 'Objective-C', logo: ObjectiveCIcon },
  { name: 'C#', logo: CsharpIcon },
  { name: 'Python', logo: PythonIcon },
  { name: 'Java', logo: JavaIcon },
  { name: 'C++', logo: CplusIcon },
];
const platformServices = [
  { name: 'Dynamic', logo: Dynamic },
  { name: 'PowerBI', logo: PowerBI },
  { name: 'Salesforce', logo: Salesforce },
  { name: 'SAP', logo: SAP },
  { name: 'SharePoint', logo: SharePoint },
  { name: 'PowerShell', logo: PowerShell },
  { name: 'ServiceNow', logo: ServiceNow },
  { name: 'QRadar', logo: QRadar },
];
const cloudServices = [
  { name: 'AWS', logo: AWS },
  { name: 'GCP', logo: GCP },
  { name: 'DigitalOcean', logo: DigitalOcean },
  { name: 'Rackspace', logo: Rackspace },
  { name: 'Alibaba', logo: Alibaba },
  { name: 'Oracle', logo: Oracle },
];
const CMSServices = [
  { name: 'Wordpress', logo: Wordpress },
  { name: 'Shopify', logo: Shopify },
  { name: 'Drupal', logo: Drupal },
  { name: 'Magento', logo: magento },
];
const Devops =[
  { name: 'Docker', logo: Docker },
  { name: 'Kubernetes', logo: Kubernetes },
  { name: 'Jenkins', logo: Jenkins },
  { name: 'Chef', logo: Chef },
  { name: 'Puppet', logo: Puppet },
  { name: 'Packer', logo: Packer },
  { name: 'Saltstack', logo: Saltstack },
  { name: 'Terraform', logo: Terraform },
  { name: 'Apache', logo: Apache },
  { name: 'Nginx', logo: Nginx },
]
const tabData = [
  { id: '1', icon: BigDataIcon, title: 'Frontend', services: frontendServices },
  { id: '2', icon: AiIcon, title: 'Backend', services: backendServices },
  { id: '3', icon: ComputerVisionIcon, title: 'UI/UX', services: uiuxServices },
  { id: '4', icon: IotIcon, title: 'Mobile', services: mobileServices },
  { id: '5', icon: BlockchainIcon, title: 'QA & Testing', services: testingServices },
  { id: '6', icon: MixedRealityIcon, title: 'Desktop', services: desktopServices },
  { id: '7', icon: OttIcon, title: 'Platform', services: platformServices },
  { id: '8', icon: CloudIcon, title: 'Cloud', services: cloudServices },
  { id: '9', icon: CMSIcon, title: 'CMS & Ecommerce', services: CMSServices },
  { id: '10', icon: DevopsIcon, title: 'Devops', services: Devops },
 
];

const Trends = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
 
  return (
    <div className="trends-container container">
      <h2>Improve and Innovate with the Tech Trends</h2>
      <p>Our team can assist you in transforming your business with the latest tech capabilities to stay ahead of the curve.</p>
      <Nav tabs className="trends-tabs">
        {tabData.map(tab => (
          <NavItem key={tab.id}>
            <NavLink
              className={classnames({ active: activeTab === tab.id })}
              onClick={() => { toggle(tab.id); }}
            >
              <img src={tab.icon} alt={tab.title} />
              {tab.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab} className="trends-tab-content">
        {tabData.map(tab => (
          <TabPane className="trends-tab-pane" tabId={tab.id} key={tab.id}>
            <Row>
              <Col sm="12">
                <h4>{tab.title}</h4>
                <div className="services-grid">
                  {tab.services.map((service, index) => (
                    <div className="service-item group-tech" key={index}>
                      {service.logo && <img src={service.logo} alt={service.name} />}
                      <a href="#">{service.name}</a>
                    </div>
                  ))}
                </div>
                <div className="explore-further left"><a href="#" className='text-decoration-none'>Find out more <i className="fa fa-arrow-right"></i></a></div>
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default Trends;