import React from 'react';

import { simpleRender, fireEvent } from 'test-utils';
import { TSymbol } from 'v2/types';
import AssetDropdownItem, { Props } from '../AssetDropdownItem';
import { EtherUUID } from 'v2/utils';

const defaultProps: Props = {
  symbol: 'ETH' as TSymbol,
  name: 'Ether',
  uuid: EtherUUID,
  onClick: jest.fn()
};

function getComponent({ symbol, uuid, name, onClick }: Props) {
  return simpleRender(
    <AssetDropdownItem symbol={symbol} uuid={uuid} name={name} onClick={onClick} />
  );
}

describe('AssetDropdownItem', () => {
  test('it renders the asset icon', async () => {
    const { getByRole } = getComponent(defaultProps);
    expect(getByRole('img').getAttribute('src')).toContain(
      'https://cdn.mycryptoapi.com/v1/icons/generic.svg'
    );
  });

  test('it displays the asset symbol and name', async () => {
    const { getByText } = getComponent(defaultProps);
    expect(getByText(defaultProps.symbol)).toBeDefined();
    expect(getByText(defaultProps.name!)).toBeDefined();
  });

  test('it triggers handler on click', async () => {
    const { container } = getComponent(defaultProps);
    const component = container.querySelector('div[class^="AssetDropdownItem__SContainer"]');
    fireEvent.pointerDown(component!);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
