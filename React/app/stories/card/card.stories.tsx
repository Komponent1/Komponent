import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from '../../component/card/card/card';
import CardHeader from '../../component/card/cardHeader/cardHeader';
import CardMedia from '../../component/card/cardMedia/cardMedia';
import CardContent from '../../component/card/cardContent/cardContent';
import mdx from './card.docs.mdx';

export default {
  title: 'components|basic/card',
  component: Card,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args} width={240}>
    <CardMedia src="https://mblogthumb-phinf.pstatic.net/MjAxODAyMDJfMTcx/MDAxNTE3NTUxOTIxNDcz.4p7O7MZoKYKwd9FSAVZBdJQEayDerw9nzUCPKNzfSL4g.Cx4zwz5E5GiYeUS1EGelbBU4Z2gPj9jn0ZjCQxD55gsg.JPEG.phjphk12/image_3575628891517551874701.jpg?type=w800" />
    <CardHeader
      title="title"
      subtitle="subtitle"
    />
    <CardContent>
      Description
    </CardContent>
  </Card>
);

export const general = Template.bind({});
general.args = {

};
