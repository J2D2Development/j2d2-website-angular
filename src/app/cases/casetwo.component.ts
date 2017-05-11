import { Component, OnInit } from '@angular/core';
import { CasesService } from './cases.service';

import { faderToggle } from '../utilities/router.animations';
import { GeneralService } from '../utilities/general.service';

@Component({
  templateUrl: './sub-component-templates/casetwo.html',
  animations: [ faderToggle() ]
})
export class CaseTwoComponent implements OnInit {
    googleFormSnippet: string = `$(document).ready(function() {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;var attend;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;$('input[name="entry.1715362024"]').change(function() {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attend = $('input[name="entry.1715362024"]:checked').val();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(attend === 'Yes') {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('#no-response').hide();<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('#yes-response').slideDown();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if(attend === 'No') {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('#yes-response').hide();<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('#no-response').slideDown();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;});<br />
    });`;

    phpSubmitSnippet: string = `$name = htmlspecialchars($_POST['name'], ENT_QUOTES);<br />
    $email = htmlspecialchars($_POST['email'], ENT_QUOTES);<br />
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES);<br />
    <br />
    $sql = "INSERT INTO comments (comment_name, comment_email, comment_message)
            VALUES ('$name', '$email', '$message')";<br />
    <br />
    if(!mysqli_query($con, $sql)) {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;die('Error: ' . mysqli_error($con));<br />
    } else {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;echo 'success!';<br />
    }`;

  constructor(
    public casesService: CasesService,
    public generalService: GeneralService
  ) { }

  ngOnInit() {
    this.casesService.updatePreviewBarState('shrunk');
  }

  updatePreviewBarState(state): void {
    this.casesService.updatePreviewBarState(state);
  }


}
