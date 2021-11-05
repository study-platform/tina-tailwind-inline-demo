import * as React from 'react'
import { ThemeContext } from './theme'
import { Section, SectionFields } from './section'
import {
  BlocksControls,
  InlineText,
  InlineTextarea,
} from 'react-tinacms-inline'

export const Testimonial = ({ data }) => {
  const theme = React.useContext(ThemeContext)

  return (
    <Section variant={data.style.color}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative">
          <blockquote>
            <div className="relative z-10 max-w-3xl mx-auto text-4xl lg:text-5xl font-extrabold tracking-normal text-center title-font text-white">
              <span
                className={`block opacity-20 text-black text-${theme.color}-700 text-8xl absolute inset-y-1/2 transform translate-y-2	-left-4 leading-4 -z-1`}
              >
                &ldquo;
              </span>
              <p className="relative opacity-95">
                <InlineTextarea name="quote" />
              </p>
              <span
                className={`block opacity-20 text-black text-${theme.color}-800 text-8xl absolute inset-y-1/2 transform translate-y-3	-right-4 leading-4 -z-1`}
              >
                &rdquo;
              </span>
            </div>
            <div className={`my-8 flex-grow-0`}>
              <span
                className={`block mx-auto h-0.5 w-1/6 bg-${theme.color}-700 opacity-70`}
              ></span>
            </div>
            <footer className="text-center">
              <p
                className={`tracking-wide title-font font-bold text-base text-${theme.color}-300`}
              >
                <InlineTextarea name="author" />
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  )
}

export function TestimonialBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <Testimonial data={data} />
    </BlocksControls>
  )
}

export const testimonial_template = {
  label: '感言',
  defaultItem: {
    quote: '计算机科学领域的两大难题：命名和缓存过期',
    author: 'Phil Karlton',
    style: {
      color: 'primary',
    },
  },
  fields: [
    {
      name: 'quote',
      label: 'Quote',
      component: 'textarea',
    },
    {
      name: 'author',
      label: 'Author',
      component: 'text',
    },
    {
      name: 'style',
      label: 'Style',
      component: 'group',
      fields: [...SectionFields],
    },
  ],
}
