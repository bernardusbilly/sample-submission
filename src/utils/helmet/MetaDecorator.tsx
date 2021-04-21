// For SEO and Page Title
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaDecoratorProps {
  title: string,
  desc: string
};

const MetaDecorator: React.FC<MetaDecoratorProps> = ({ title, desc }: MetaDecoratorProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};

export default MetaDecorator;
