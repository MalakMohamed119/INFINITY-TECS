import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Machine, CategoryInfo, MachineCategory } from '../models/machine.model';
import { MACHINES_DATA, CATEGORIES_DATA } from '../data/machines.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private machines = signal<Machine[]>(MACHINES_DATA);
  private categories = signal<CategoryInfo[]>(CATEGORIES_DATA);

  getCategories(): Observable<CategoryInfo[]> {
    return of(this.categories());
  }

  getCategoryById(id: MachineCategory): CategoryInfo | undefined {
    return this.categories().find(c => c.id === id);
  }

  getAllMachines(): Observable<Machine[]> {
    return of(this.machines());
  }

  getFeaturedMachines(): Observable<Machine[]> {
    return of(this.machines().filter(m => m.featured));
  }

  getMachinesByCategory(category: MachineCategory): Observable<Machine[]> {
    return of(this.machines().filter(m => m.category === category));
  }

  getMachineById(id: string): Observable<Machine | undefined> {
    const found = this.machines().find(m => m.id === id);
    return of(found);
  }

  getSubCategories(category: MachineCategory): string[] {
    const categoryMachines = this.machines().filter(m => m.category === category);
    const subCats = categoryMachines
      .map(m => m.subCategory)
      .filter((val): val is string => !!val);
    return Array.from(new Set(subCats));
  }
}
