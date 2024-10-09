import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import type NavbarItemType from '@theme/NavbarItem';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarItemType> & {
  type?: string;
};

export default function NavbarItemWrapper(props: Props): JSX.Element {
  return (
    <>
      <NavbarItem {...props} />
    </>
  );
}