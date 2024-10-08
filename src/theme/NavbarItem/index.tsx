import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import type NavbarItemType from '@theme/NavbarItem';
import type {WrapperProps} from '@docusaurus/types';
import IntercomLink from '@site/src/components/IntercomLink';

type Props = WrapperProps<typeof NavbarItemType> & {
  type?: string;
};

export default function NavbarItemWrapper(props: Props): JSX.Element {
  if (props.type === 'custom-intercom-link') {
    return <IntercomLink />;
  }
  return (
    <>
      <NavbarItem {...props} />
    </>
  );
}