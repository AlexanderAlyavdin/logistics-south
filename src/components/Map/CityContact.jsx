import React from "react"
import "./city-contact.scss";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import { Row, Col, Dropdown } from "react-bootstrap";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import CITY_CONTACTS from "components/Map/city-contacts";

const CityContact = ({ selectedCityName, onCitySelected }) => {
  const breakpoint = useBreakpoint();

  const contact = CITY_CONTACTS.find(c => c.city === selectedCityName);

  return (
    <div className="city-contact">
      <Col>
        <Row className="align-items-center justify-content-center">
          {breakpoint.sm &&
            <Dropdown size="xl" className="mb-5 w-100 align-items-center justify-content-center">
              <Dropdown.Toggle className="w-100 city-contact__dropdown" variant="info" id="dropdown-basic">
                {selectedCityName}
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                {CITY_CONTACTS.map(({city}) => (
                  <Dropdown.Item key={city} onClick={() => { onCitySelected(city) }}>{city}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          }
        </Row>

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
      </Col>


    </div>
  );
};

CityContact.propTypes = {
  onCitySelected: PropTypes.func.isRequired,
  selectedCityName: PropTypes.string.isRequired,
};

export default CityContact;
