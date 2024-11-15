import type { SidebarConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js';

const docsSidebar: SidebarConfig = [
  {
    type: 'category',
    label: 'Introduction',
    collapsed: false,
    link: { type: 'doc', id: 'introduction/README' },
    items: [{ type: 'autogenerated', dirName: 'introduction' }],
    customProps: { id: 'introduction' },
  },
  {
    type: 'category',
    label: 'Integrate Logto',
    items: [{ type: 'autogenerated', dirName: 'integrate-logto' }],
    customProps: { id: 'integrate-logto' },
  },
  {
    type: 'category',
    label: 'End-user flows',
    link: { type: 'doc', id: 'end-user-flows/README' },
    items: [{ type: 'autogenerated', dirName: 'end-user-flows' }],
    customProps: { id: 'end-user-flows' },
  },
  {
    type: 'category',
    label: 'Connectors',
    link: { type: 'doc', id: 'connectors/README' },
    items: [{ type: 'autogenerated', dirName: 'connectors' }],
    // Items: [
    //   {
    //     type: 'category',
    //     label: 'Email connectors',
    //     link: { type: 'doc', id: 'connectors/email' },
    //     // items: [
    //     //   {
    //     //     type: 'link',
    //     //     label: 'SendGrid Email',
    //     //     href: 'pathname:///integrations/sendgrid-email',
    //     //   },
    //     //   {
    //     //     type: 'link',
    //     //     label: 'Mailgun',
    //     //     href: 'pathname:///integrations/mailgun',
    //     //   },
    //     //   {
    //     //     type: 'link',
    //     //     label: 'AWS Direct Mail',
    //     //     href: 'pathname:///integrations/aws-ses',
    //     //   },
    //     //   {
    //     //     type: 'link',
    //     //     label: 'Aliyun Direct Mail',
    //     //     href: 'pathname:///integrations/aliyun-dm',
    //     //   },
    //     //   {
    //     //     type: 'link',
    //     //     label: 'SMTP',
    //     //     href: 'pathname:///integrations/smtp',
    //     //   },
    //     // ],
    //     items: [{ type: 'autogenerated', dirName: 'connectors/email' }],
    //   },
    //   {
    //     type: 'category',
    //     label: 'SMS connectors',
    //     link: { type: 'doc', id: 'connectors/sms' },
    //     items: [
    //       {
    //         type: 'link',
    //         label: 'SendGrid Email',
    //         href: 'pathname:///integrations/sendgrid-email',
    //       },
    //     ],
    //   },
    // ],
    customProps: { id: 'connectors' },
  },
  // {
  //   type: 'category',
  //   label: 'Customization',
  //   link: { type: 'doc', id: 'customization/README' },
  //   items: [{ type: 'autogenerated', dirName: 'customization' }],
  //   customProps: { id: 'customization' },
  // },
  // {
  //   type: 'category',
  //   label: 'Authorization',
  //   link: { type: 'doc', id: 'authorization/README' },
  //   items: [{ type: 'autogenerated', dirName: 'authorization' }],
  //   customProps: { id: 'authorization' },
  // },
  // {
  //   type: 'category',
  //   label: 'User management',
  //   link: { type: 'doc', id: 'user-management/README' },
  //   items: [{ type: 'autogenerated', dirName: 'user-management' }],
  //   customProps: { id: 'user-management' },
  // },
  // {
  //   type: 'category',
  //   label: 'Organizations',
  //   link: { type: 'doc', id: 'organizations/README' },
  //   items: [{ type: 'autogenerated', dirName: 'organizations' }],
  //   customProps: { id: 'organizations' },
  // },
  {
    type: 'category',
    label: 'Developer',
    link: { type: 'doc', id: 'developer/README' },
    items: [{ type: 'autogenerated', dirName: 'developer' }],
    customProps: { id: 'developer' },
  },
  // {
  //   type: 'category',
  //   label: 'Logto Cloud',
  //   link: { type: 'doc', id: 'logto-cloud/README' },
  //   items: [{ type: 'autogenerated', dirName: 'logto-cloud' }],
  //   customProps: { id: 'logto-cloud' },
  // },
  // {
  //   type: 'category',
  //   label: 'Logto OSS',
  //   link: { type: 'doc', id: 'logto-oss/README' },
  //   items: [{ type: 'autogenerated', dirName: 'logto-oss' }],
  //   customProps: { id: 'logto-oss' },
  // },
  {
    type: 'category',
    label: 'Concepts',
    items: [{ type: 'autogenerated', dirName: 'concepts' }],
    customProps: { id: 'concepts' },
  },
];

export default docsSidebar;
