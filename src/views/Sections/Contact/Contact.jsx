import React, { useState } from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import RussianMap from "components/Map/RussianMap";
import CityContact from "components/Map/CityContact";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";

const Contact = ({ className }) => {
  const breakpoint = useBreakpoint();

  const { markdownRemark = {} } = useStaticQuery(graphql`
    query ContactQuery {
      markdownRemark(fields: { fileName: { regex: "/contact/i" } }) {
        frontmatter {
          anchor
          header
          subheader
          contractFile
          sheetFile
          telephone
          email
        }
      }
    }
  `);

  const [selectedCity, setSelectedCity] = useState("Москва");

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email, sheetFile, contractFile } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <SectionHeader header="Контакты" subheader=" " />

      <CityContact
        selectedCityName={selectedCity}
        onCitySelected={(city) => {
          setSelectedCity(city);
        }}
      />
      {!breakpoint.sm && (
        <RussianMap
          selectedCity={selectedCity}
          onCitySelected={(city) => {
            setSelectedCity(city);
          }}
        />
      )}

      <Row className={`justify-content-center ${breakpoint.sm ? "mt-5" : ""}`}>
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={2} className="ml-auto text-center">
          <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        <Col lg={2} className="text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
        <Col lg={2} className="text-center">
          <Icon iconName="MapMarkedAltIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href="https://yandex.ru/maps/-/CCUA6WdjhA">
            107031, г. Москва, ул. Кузнецкий Мост, дом 21/5, этаж 5, помещение V, комната 30
          </a>
        </Col>
        <Col lg={2} className="text-center">
          <Icon iconName="FileDownloadIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={contractFile} rel="noopener noreferrer" target="_blank">
            Договор поставки товара
          </a>
        </Col>
        <Col lg={2} className="mr-auto text-center">
          <Icon iconName="FileDownloadIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={sheetFile} rel="noopener noreferrer" target="_blank">
            Специальная оценка условий труда
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

Contact.defaultProps = {
  className: null,
};

export default Contact;
