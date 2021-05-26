import { AddressModel } from '../../models/address.model';
import { userMock } from '../user/user-mock';
import { addressesData } from './addresses';

const addresses: AddressModel[] = [];

for (const addresseData of addressesData) {
    const address = new AddressModel();

    // const userId = Math.floor(Math.random() * (userMock.length - 1));
    const userId = userMock[Math.floor(Math.random() * (userMock.length - 1))];
    address.id = addresseData.id;
    address.streetNb = addresseData.streetNb;
    address.address = addresseData.address;
    address.postal = addresseData.postal;
    address.city = addresseData.city;
    address.type = addresseData.type;
    address.userId = userId.id;

    addresses.push(address);
}

export const addressMock = addresses;
