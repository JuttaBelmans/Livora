import Markdoc, { type Node } from '@markdoc/markdoc';
import React from 'react';

export default function MarkdocContent({ node }: { node: unknown }) {
  const renderable = Markdoc.transform(node as Node);
  return <div className="article-body">{Markdoc.renderers.react(renderable, React)}</div>;
}
