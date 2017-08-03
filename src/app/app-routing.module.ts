import { ShopInfoComponent } from './components/pages/shopInfo/shopInfo.component';
import { ManufacturesComponent } from './components/pages/manufactures/manufactures.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { SuppliersComponent } from './components/pages/suppliers/suppliers.component';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { BillHistoryComponent } from './components/pages/billHistory/billHistory.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { ClosingComponent } from './components/pages/closing/closing.component';
import { ExpiryProductsComponent } from './components/pages/expiryProducts/expiryProducts.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { PurchaseComponent } from './components/pages/purchase/purchase.component';
import { BillingComponent } from './components/pages/billing/billing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    { path: '', component: BillingComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'billHistory', component: BillHistoryComponent },
    { path: 'purchase', component: PurchaseComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'expiryProducts', component: ExpiryProductsComponent },
    { path: 'closing', component: ClosingComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'suppliers', component: SuppliersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'manufactures', component: ManufacturesComponent },
    { path: 'shopInfo', component: ShopInfoComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

/**ADD COMPONENTS IN routingComponents */
export const routingComponents = [
    ShopInfoComponent, ManufacturesComponent, ProductsComponent, SuppliersComponent, BillingComponent, PurchaseComponent, ReportsComponent, ExpiryProductsComponent, ClosingComponent, SettingsComponent, BillHistoryComponent, DoctorsComponent
]