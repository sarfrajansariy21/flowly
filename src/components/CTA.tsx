import Button from './Button'
import './CTA.scss'

function CTA() {
  return (
    <section className="cta">
      <div className="cta__inner">
        <h2>Ready to see Flowly in action?</h2>
        <p>Join thousands of teams shipping faster with less busywork.</p>
        <div className="cta__actions">
          <Button variant="primary">Start free trial</Button>
          <Button variant="ghost">Talk to sales</Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
