import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { useStaticQuery, graphql } from "gatsby";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";

import Client from "components/Client";

const Clients = ({ className }) => {
  const { markdownRemark = {} } = useStaticQuery(graphql`
    query ClientsQuery {
      markdownRemark(fields: { fileName: { regex: "/clients/i" } }) {
        frontmatter {
          anchor
          header
          clients {
            imageFileName
          }
        }
      }
    }
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients, header } = frontmatter;

  return (
    <PageSection className={clsx("", className)} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader=" "/>
      </Row>
      <Row>
        {clients.map(({ href, imageFileName }) => (
          <Col md={3} sm={4} xs={4} className="my-3" key={imageFileName}>
            <Client imageFileName={imageFileName} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
};

Clients.defaultProps = {
  className: null,
};

export default Clients;
