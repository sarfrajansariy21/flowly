import './Footer.scss'

const COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'Guides', 'Support', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security'],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__brand">
            <span className="footer__logo" aria-hidden="true" />
            Flowly
          </a>

          <div className="footer__columns">
            {COLUMNS.map((column) => (
              <div className="footer__column" key={column.title}>
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} Flowly, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
