import Button from './Button'
import './Pricing.scss'

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'For small teams getting organized.',
    features: ['Up to 10 members', 'Unlimited tasks & docs', 'Basic automations', 'Community support'],
    variant: 'secondary' as const,
    cta: 'Start for free',
  },
  {
    name: 'Team',
    price: '$14',
    period: 'per user / month',
    description: 'For growing teams that need to move fast.',
    features: [
      'Unlimited members',
      'Advanced automations',
      'Integrations with your stack',
      'Live reporting dashboards',
      'Priority support',
    ],
    variant: 'primary' as const,
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed annually',
    description: 'For organizations with advanced security needs.',
    features: ['SSO & SCIM', 'Custom permissions', 'Audit logs', 'Dedicated success manager'],
    variant: 'secondary' as const,
    cta: 'Contact sales',
  },
]

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__inner">
        <div className="pricing__heading">
          <span className="pricing__eyebrow">Pricing</span>
          <h2>Simple pricing that scales with you</h2>
          <p>Start free. Upgrade when your team is ready for more.</p>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan) => (
            <div
              className={`pricing__card ${plan.highlighted ? 'pricing__card--highlighted' : ''}`}
              key={plan.name}
            >
              {plan.highlighted && <span className="pricing__tag">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing__description">{plan.description}</p>
              <div className="pricing__price">
                <span className="pricing__amount">{plan.price}</span>
                <span className="pricing__period">{plan.period}</span>
              </div>
              <Button variant={plan.variant} className="pricing__cta">
                {plan.cta}
              </Button>
              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
