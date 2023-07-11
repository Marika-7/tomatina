import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderRequest } from '../../interfaces/order/order.interface';
import { 
  CollectionReference, 
  DocumentData, 
  DocumentReference, 
  Firestore, 
  addDoc, 
  collection, 
  collectionData, 
  deleteDoc, 
  doc, 
  docData, 
  updateDoc 
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore
  ) { 
    this.orderCollection = collection(this.afs, 'orders');
  }

  getAll(): Observable<DocumentData[]> {
    return collectionData(this.orderCollection, { idField: 'id' });
  }

  // getOne(id: string): Observable<DocumentData> {
  //   const orderDocumentReference = doc(this.afs, `orders/${id}`);
  //   return docData(orderDocumentReference, { idField: 'id' });
  // }

  // create(order: IOrderRequest): Promise<DocumentReference<DocumentData>> {
  //   return addDoc(this.orderCollection, order);
  // }

  // update(order: IOrderRequest, id: string): Promise<void> {
  //   const orderDocumentReference = doc(this.afs, `orders/${id}`);
  //   return updateDoc(orderDocumentReference, { ...order });
  // }

  // delete(id: string): Promise<void> {
  //   const orderDocumentReference = doc(this.afs, `orders/${id}`);
  //   return deleteDoc(orderDocumentReference);
  // }

}
