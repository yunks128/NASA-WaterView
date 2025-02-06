// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      items: [ 'Overview'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: ['installation'],
    },
    {
      type: 'category',
      label: 'Data Access',
      collapsible: false,
      items: ['data-access', 'api-reference'],
    },
    /*
    {
      type: 'category',
      label: 'User Guides',
      collapsible: true,
      items: ['guides/hydroglobe', 'guides/riverview', 'guides/nldas3', 'guides/veda', 'guides/rapid'],
    },
    */
    {
      type: 'category',
      label: 'Advanced Topics',
      collapsible: true,
      items: ['deployment', 'architecture', 'security', 'testing'],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsible: true,
      items: ['contributing', 'changelog'],
    },
  ],
};

export default sidebars;