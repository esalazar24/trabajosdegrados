import { Component, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    constructor() { }
  
    login(username: string, password: string): boolean {
      // Implementar lógica de login
      return true; // Devolver true si el usuario se ha logueado correctamente
    }
  
  }