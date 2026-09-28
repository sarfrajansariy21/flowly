import Button from './Button'
import './Hero.scss'

const LOGOS = ['Northwind', 'Vertex', 'Orbital', 'Marrow', 'Fenwick']

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <span className="hero__badge">New · Automations 2.0 is here</span>
        <h1 className="hero__title">
          Ship your team&rsquo;s best work,
          <br />
          without the busywork.
        </h1>
        <p className="hero__subtitle">
          Flowly brings your tasks, docs, and automations into one fast workspace
          &mdash; so your team spends less time coordinating and more time building.
        </p>
        <div className="hero__cta">
          <Button variant="primary">Start free trial</Button>
          <Button variant="secondary">Watch demo</Button>
        </div>
        <p className="hero__note">No credit card required &middot; Free for teams up to 10</p>

        <div className="hero__logos">
          <span>Trusted by teams at</span>
          <ul>
            {LOGOS.map((logo) => (
              <li key={logo}>{logo}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}

export default Hero
