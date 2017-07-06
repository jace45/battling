import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Popular, { SelectLanguage }  from '../../src/components/Popular';

describe('Should render Popular page', function() {

    it('empty test should run successfully', function() {

        const wrapper = shallow(<Popular />);
        expect(wrapper.find(SelectLanguage)).to.have.length(1);
    });
});