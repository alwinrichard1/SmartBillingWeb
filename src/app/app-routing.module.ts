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
    { path: 'purchase', component: PurchaseComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'expiryProducts', component: ExpiryProductsComponent },
    { path: 'closing', component: ClosingComponent },
    { path: 'settings', component: SettingsComponent },
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
    BillingComponent, PurchaseComponent, ReportsComponent, ExpiryProductsComponent
    , ClosingComponent, SettingsComponent
]