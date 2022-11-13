import { isUsable, isNotEmpty } from "../../helpers/nullChecker";
import { properties } from "../../config/Data";
const isValid = (price, location, type, date) => {
  isNotEmpty(price != null) &&
    isNotEmpty(location) &&
    isNotEmpty(type) &&
    isUsable(date);
};
const isValidPrice = (price) => isNotEmpty(price );
const isValidLocation = (location) => isNotEmpty(location);
const isValidType = (type) => isNotEmpty(type);
const isValidDate = (date) => isUsable(date);
export const findMatchingProperties = (searchFilter) => {
  let matchingProperties = properties;
  if (
    isValid(
      searchFilter.price,
      searchFilter.location,
      searchFilter.type,
      searchFilter.date
    )
  ) {
    matchingProperties = properties.filter((property) => {
      let lowerLimit = parseInt(searchFilter.price.split("-")[0]);
      let higherLimit = parseInt(searchFilter.price.split("-")[1]);
      const sameLocation =
        property.location.toLowerCase() === searchFilter.location.toLowerCase();
      const sameType = property.type === searchFilter.type;
      const greaterDate = property.date > searchFilter.date;
      const matchingRange =
        lowerLimit <= parseInt(property.price) &&
        parseInt(property.price) <= higherLimit;
      return sameLocation && sameType && greaterDate && matchingRange;
    });
    return matchingProperties;
  } else {
    if (isValidPrice(searchFilter.price)) {
      matchingProperties = matchingProperties.filter((property) => {
        let lowerLimit = parseInt(searchFilter.price.split("-")[0]);
        let higherLimit = parseInt(searchFilter.price.split("-")[1]);
        const matchingRange =
          lowerLimit <= parseInt(property.price) &&
          parseInt(property.price) <= higherLimit;
        return matchingRange;
      });
    }
    if (isValidLocation(searchFilter.location)) {
      matchingProperties = matchingProperties.filter((property) => {
        const sameLocation =
          property.location.toLowerCase() ===
          searchFilter.location.toLowerCase();
        return sameLocation;
      });
    }
    if (isValidType(searchFilter.type)) {
      matchingProperties = matchingProperties.filter((property) => {
        const sameType = property.type === searchFilter.type;
        return sameType;
      });
    }
    if (isValidDate(searchFilter.date)) {
      matchingProperties = matchingProperties.filter((property) => {
        const greaterDate = property.date > searchFilter.date;
        return greaterDate;
      });
    }
    return matchingProperties;
  }
};
