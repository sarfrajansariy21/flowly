import './Features.scss'

const FEATURES = [
  {
    icon: '⚡',
    title: 'Automations that just work',
    description:
      'Turn multi-step processes into one-click automations. No scripts, no waiting on engineering.',
  },
  {
    icon: '🗂️',
    title: 'One workspace, every project',
    description:
      'Tasks, docs, and timelines live side by side, so context never gets lost between tools.',
  },
  {
    icon: '🔗',
    title: 'Connects to your stack',
    description:
      'Native integrations with the tools your team already uses — synced in real time.',
  },
  {
    icon: '📊',
    title: 'Reporting that updates itself',
    description: 'Live dashboards pull straight from your work, so status updates write themselves.',
  },
  {
    icon: '🔒',
    title: 'Enterprise-grade security',
    description: 'SSO, granular permissions, and audit logs keep your team compliant by default.',
  },
  {
    icon: '🤝',
    title: 'Built for collaboration',
    description: 'Comment, assign, and review in context — no more scattered feedback threads.',
  },
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__heading">
          <span className="features__eyebrow">Why Flowly</span>
          <h2>Everything your team needs to move faster</h2>
          <p>Replace your patchwork of tools with a single, fast workspace built for how teams actually work.</p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article className="features__card" key={feature.title}>
              <span className="features__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
