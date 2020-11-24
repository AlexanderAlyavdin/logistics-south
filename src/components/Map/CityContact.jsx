import React from "react"
import "./city-contact.scss";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import { Row, Col } from "react-bootstrap";
import CITY_CONTACTS from "components/Map/city-contacts";

const CityContact = ({ selectedCityName }) => {
  const contact = CITY_CONTACTS.find(c => c.city === selectedCityName);

  return (
    <div className="city-contact">
      {/* <Row className="align-items-center">
        <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
        <div className="ml-5">{contact.city}</div>
      </Row> */}

      <Row className="align-items-center flex-nowrap">
        <Icon iconName="MapMarkedAltIcon" size="3x" className="text-muted mb-3" />
        <a className="ml-5" href={contact.addressHref}>
          {contact.address}
        </a>
      </Row>

      <Row className="align-items-center">
        <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
        <a className="ml-5" href={`tel:+${contact.phone}`}>
            {`+${contact.phone}`}
          </a>
      </Row>

      <Row className="align-items-center">
        <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
        <a className="ml-5" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
      </Row>


    </div>
  );
};

CityContact.propTypes = {
  selectedCityName: PropTypes.string.isRequired,
};

export default CityContact;
