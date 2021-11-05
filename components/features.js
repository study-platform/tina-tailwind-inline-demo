import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from 'react-tinacms-inline'
import { Icon, ICON_FIELDS } from './icon'
import { Actions, ACTION_FIELDS } from './actions'
import { Section, SectionFields } from './section'

export const FeatureBlock = ({ index, data }) => {
  return (
    <div
      className="px-8 py-6 w-full xl:w-auto flex-grow xl:flex-shrink"
      style={{ flexBasis: '22rem' }}
    >
      <BlocksControls
        index={index}
        focusRing={{ offset: 16 }}
        insetControls={false}
      >
        <div className="max-w-lg">
          <div className={`mb-6 w-auto inline-block`}>
            <Icon icon={data.icon} />
          </div>
          <h3 className="mb-4 transition duration-150 ease-out text-2xl font-semibold title-font">
            <InlineTextarea name="title" />
          </h3>
          <p className="mb-5 transition duration-150 ease-out text-base opacity-80 leading-relaxed">
            <InlineTextarea name="text" />
          </p>
          <Actions actions={data.actions} />
        </div>
      </BlocksControls>
    </div>
  )
}

export const feature_template = {
  label: 'Feature',
  defaultItem: {
    icon: {
      color: 'primary',
      name: '',
      style: 'circle',
    },
    title: 'Feature Heading Text',
    text: 'Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ',
    actions: [
      {
        label: 'Learn More',
        type: 'link',
        icon: 'true',
      },
    ],
    style: {
      color: 'default',
    },
  },
  itemProps: (item) => ({
    label: item.title,
  }),
  fields: [
    ...ICON_FIELDS,
    {
      name: 'title',
      label: 'Title',
      component: 'text',
    },
    {
      name: 'text',
      label: 'Text',
      component: 'text',
    },
    ...ACTION_FIELDS,
  ],
}

export const Features = ({ data }) => {
  return (
    <Section variant={data.style.color}>
      <div className="container py-12 lg:py-24 mx-auto">
        <InlineBlocks
          direction="horizontal"
          className="flex flex-wrap text-left"
          name="items"
          blocks={FEATURE_BLOCKS}
        />
      </div>
    </Section>
  )
}

export function FeaturesBlock(props) {
  return (
    <BlocksControls
      index={props.index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <Features data={props.data} />
    </BlocksControls>
  )
}

export const features_template = {
  label: '产品特性',
  defaultItem: {
    items: [
      {
        _template: 'feature',
        icon: {
          color: 'red',
          name: 'BiTrophy',
          style: 'circle',
        },
        title: '功能 1',
        text: '添加修改功能描述',
        actions: [
          {
            label: '了解更多',
            type: 'link',
            icon: 'true',
          },
        ],
      },
      {
        _template: 'feature',
        icon: {
          color: 'primary',
          name: 'BiPieChartAlt2',
          style: 'circle',
        },
        title: '功能 2',
        text: '添加修改功能描述',
        actions: [
          {
            label: '了解更多',
            type: 'link',
            icon: 'true',
          },
        ],
      },
      {
        _template: 'feature',
        icon: {
          color: 'yellow',
          name: 'BiMapAlt',
          style: 'circle',
        },
        title: '功能 3',
        text: '添加修改功能描述',
        actions: [
          {
            label: '了解更多',
            type: 'link',
            icon: 'true',
          },
        ],
      },
    ],
    style: {
      color: 'default',
    },
  },
  fields: [
    {
      label: 'Features',
      name: 'items',
      component: 'blocks',
      itemProps: (item) => ({
        label: item.title,
      }),
      templates: {
        feature: feature_template,
      },
    },
    {
      name: 'style',
      label: 'Style',
      component: 'group',
      fields: [...SectionFields],
    },
  ],
}

const FEATURE_BLOCKS = {
  feature: {
    Component: FeatureBlock,
    template: feature_template,
  },
}
