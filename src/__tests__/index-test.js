import * as babel from '@babel/core';
import plugin from '../index';

const example = `
console.log('test');

function test() {
  console.log('call console in a method');
}
`;

it('remove console works with prod env', () => {
  const { code } = babel.transform(example,
    { plugins: [[plugin, { env: 'prod' }]] });
  expect(code).toMatchSnapshot();
  expect(code).toBe(`"use strict";

function test() {}`);
});
