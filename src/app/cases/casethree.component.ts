import { Component, OnInit } from '@angular/core';
import { CasesService } from './cases.service';

import { faderToggle } from '../utilities/router.animations';
import { GeneralService } from '../utilities/general.service';

@Component({
  templateUrl: './sub-component-templates/casethree.html',
  animations: [ faderToggle() ]
})
export class CaseThreeComponent implements OnInit {
  redirectExample: string = `def old_url_redirects(request, path):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;path = path.lower()<br />
    &nbsp;&nbsp;&nbsp;&nbsp;if path in {'money-desk-software-products', 'moneydesk'}:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path = 'money-desk-software-system'<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category = 'trust'<br />
    &nbsp;&nbsp;&nbsp;&nbsp;return HttpResponsePermanentRedirect('/'+category+'/'+path+'/view/details')
    `;

    endpointExample: string = `def sitemap_xml(request):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;return render_to_response('registration/sitemap.xml', mimetype="application/xml")<br />
    <br />
    def robots(request):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;return render_to_response('registration/robots.txt', mimetype="text/plain")<br />
    <br />
    def endpoint(request, path):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;return render_to_response('partials/' + path + '.html')
    &nbsp;&nbsp;&nbsp;&nbsp;
    `;

    checkrouteExample: string = `var checkRoute = function checkRoute(param, level) {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;if(level === 'categories') {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var levelCheck = [ 'accounting', 'bank_operations', 'central-bank-operations'];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;} else if(level === 'products') {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var levelCheck = ['accounts-payable', 'accounts-receivable-software', 'account-reconciliation', 'fixed-assets-management'];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;} else if(level === 'subproducts') {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var levelCheck = ['treasury-portfolio', 'fund-portfolio', 'customer-portfolio', 'central-bank-portfolio'];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;for(var i = 0, l = levelCheck.length; i < l; i += 1) {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(levelCheck[i] === param) {<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return false;
          `;

    moduleFactoryExample: string = `app.factory('DetailMenuService', function() {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;var data = {"clients": false, "about": false};<br />
        &nbsp;&nbsp;&nbsp;&nbsp;return {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rehide: function() {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.clients = false;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.about = false;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setHidden: function(ele) {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[ele] = true;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checkHidden: function(ele) {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return data[ele];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;}<br />
      });
      `;

  constructor(
    public casesService: CasesService,
    public generalService: GeneralService
  ) { }

  ngOnInit() {
    this.casesService.updatePreviewBarState('shrunk');
  }

  updatePreviewBarState(state: string): void {
    this.casesService.updatePreviewBarState(state);
  }

}
