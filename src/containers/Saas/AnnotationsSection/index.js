import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import AnnotationsSectionWrapper, { SectionObject } from './annotations.style';

import ImageOne from '../../../img/annotate_raw1270x760.gif';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';

const AnnotationsSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  gifStyle,
}) => {
  return (
    <AnnotationsSectionWrapper id="visitorSection">
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Annotations on the web"
                {...title}
              />
            }
            description={
              <Text
                content="Keep your thoughts organized with their original context."
                {...description}
              />
            }
          />
        </Box>
      </Container>
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade right>
              <Image src={ImageOne} className="banner-img" alt="Annotations" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
    </AnnotationsSectionWrapper>
  );
};

AnnotationsSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

AnnotationsSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    mr: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '36px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.4',
  },
  description: {
    fontSize: '20px',
    lineHeight: '30px',
    color: '#757280',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default AnnotationsSection;
