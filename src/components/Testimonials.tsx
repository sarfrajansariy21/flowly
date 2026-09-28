import './Testimonials.scss'

const TESTIMONIALS = [
  {
    quote:
      'We replaced four different tools with Flowly. Our team saves close to a day a week on status updates alone.',
    name: 'Amara Chukwu',
    role: 'Head of Operations, Northwind',
  },
  {
    quote:
      'The automations paid for the whole tool in the first month. It genuinely feels like having an extra teammate.',
    name: 'Daniel Reyes',
    role: 'Engineering Manager, Vertex',
  },
  {
    quote:
      'Rollout took an afternoon, not a quarter. Support was fast, and the whole team was productive on day one.',
    name: 'Priya Nair',
    role: 'COO, Orbital',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__heading">
          <span className="testimonials__eyebrow">Customers</span>
          <h2>Loved by teams who ship</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <figure className="testimonials__card" key={item.name}>
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonials__avatar" aria-hidden="true">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
