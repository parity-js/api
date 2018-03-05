// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

/* eslint-disable no-unused-expressions */

const { TEST_HTTP_URL, mockHttp } = require('../../../test/mockRpc');

const { Http, PromiseProvider } = require('../../provider');
const Evm = require('./evm');

const instance = new Evm(new PromiseProvider(new Http(TEST_HTTP_URL, -1)));

describe('rpc/Evm', () => {
  describe('increaseTime', () => {
    it('returns the total time adjustment, in seconds', () => {
      mockHttp([{ method: 'evm_increaseTime', reply: { result: '0x123456' } }]);

      return instance.increaseTime(1).then((increase) => {
        expect(increase).to.equal('0x123456');
      });
    });
  });
});
