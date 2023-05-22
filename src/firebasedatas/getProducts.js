import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  setDoc,
  getDoc,
  doc,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";
import { auth, db, storage } from "./firebase";

/// getting docs

export const getAll = async(data) => {

  const queryData = query(
    collection(db, "productDetails")
  );

  //console.log("from env file", process.env.VUE_APP_MESSAGING_ID)
  await getDocs(queryData).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      data.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });
  
  return data
}

export const getCategory = async (
  health,
  phone,
  laptop,
  estate,
  pharmacy,
  drink,
  foodstuff,
  fashion,
  automobile,
  appliance,
  baby
) => {
  const queryHealth = query(
    collection(db, "productDetails"),
    where("category", "==", "Health & Beauty")
  );

  //console.log("from env file", process.env.VUE_APP_MESSAGING_ID)
  await getDocs(queryHealth).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      health.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });
  const queryPhone = query(
    collection(db, "productDetails"),
    where("category", "==", "Phones")
  );
  await getDocs(queryPhone).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      console.log(fields);
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      console.log(image);
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      phone.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });

    console.log(phone);
  });
  const queryLaptop = query(
    collection(db, "productDetails"),
    where("category", "==", "Laptops")
  );
  await getDocs(queryLaptop).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      laptop.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });
  const queryEstate = query(
    collection(db, "productDetails"),
    where("category", "==", "Real Estate")
  );
  await getDocs(queryEstate).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      estate.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });
  const queryPharm = query(
    collection(db, "productDetails"),
    where("category", "==", "Pharmaceutical")
  );
  await getDocs(queryPharm).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      pharmacy.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });
  const querydrink = query(
    collection(db, "productDetails"),
    where("category", "==", "Drinks & Beverages")
  );
  await getDocs(querydrink).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      drink.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });

  const queryfood = query(
    collection(db, "productDetails"),
    where("category", "==", "FoodStuffs")
  );
  await getDocs(queryfood).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      foodstuff.push({
        id: doc.id,
        category,
        description,
        createdAt,

        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });

  const queryfashion = query(
    collection(db, "productDetails"),
    where("category", "==", "Fashion")
  );
  await getDocs(queryfashion).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      fashion.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });
  console.log(fashion);
  const queryauto = query(
    collection(db, "productDetails"),
    where("category", "==", "Automobile")
  );
  await getDocs(queryauto).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      automobile.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });

  const queryapp = query(
    collection(db, "productDetails"),
    where("category", "==", "Appliances")
  );
  await getDocs(queryapp).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      appliance.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });

  const querybaby = query(
    collection(db, "productDetails"),
    where("category", "==", "Drinks & Beverages")
  );
  await getDocs(querybaby).then((res) => {
    console.log(res.docs);
    res.docs.forEach((doc) => {
      const { fields } = doc._document.data.value.mapValue;
      const {
        category,
        description,
        createdAt,
        name,
        price,
        image,
        storeName,
        merchantId,
      } = fields;
      const { values } = image.arrayValue;
      console.log(values);
      const images = values.filter(
        (val) => val.stringValue !== undefined || val.stringValue !== null
      );
      baby.push({
        id: doc.id,
        category,
        description,
        createdAt,
        name,
        price,
        images,
        storeName,
        merchantId,
      });
    });
  });

  return {
    health,
    phone,
    laptop,
    estate,
    pharmacy,
    drink,
    foodstuff,
    fashion,
    automobile,
    appliance,
    baby,
  };
};
