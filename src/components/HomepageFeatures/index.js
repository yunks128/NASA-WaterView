import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hydrologic Data Analysis',
    Svg: require('@site/static/img/hydrology_analysis.svg').default,
    description: (
      <>
        NASA WaterView provides near real-time hydrologic data analytics, enabling
        precise modeling and forecasting for global water resources.
      </>
    ),
  },
  {
    title: 'Cloud-Based Simulations',
    Svg: require('@site/static/img/cloud_simulation.svg').default,
    description: (
      <>
        Scalable cloud-based RAPID model simulations allow users to compute hydrologic
        processes efficiently using AWS infrastructure.
      </>
    ),
  },
  {
    title: 'Open-Access Data',
    Svg: require('@site/static/img/open_data.svg').default,
    description: (
      <>
        The platform ensures fully open-access hydrologic datasets, aligning with NASA’s
        Open Science initiatives.
      </>
    ),
  },
  {
    title: 'Interactive Visualization',
    Svg: require('@site/static/img/data_visualization.svg').default,
    description: (
      <>
        Advanced visualization tools provide clear, interactive maps and charts for
        real-time hydrologic monitoring.
      </>
    ),
  },
  {
    title: 'Machine Learning Integration',
    Svg: require('@site/static/img/machine_learning.svg').default,
    description: (
      <>
        AI-driven predictive analytics enhance the accuracy of water resource forecasting
        using satellite and in-situ data.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
