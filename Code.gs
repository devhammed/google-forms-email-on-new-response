/* globals MailApp */
/**
 * Send a Email alert on new response to Google Forms
 *
 * @see https://developers.google.com/apps-script/guides/triggers/events for Form Event object docs
 * @see https://developers.google.com/apps-script/reference/forms/form-response for FormResponse class docs
 * @see https://developers.google.com/apps-script/reference/mail/mail-app for MailApp class docs
 * @param {Event} e
 */
function emailOnNewResponse (e) {
  var formResponse = e.response
  var prefilledUrl = formResponse.toPrefilledUrl()
  var responses = formResponse.getItemResponses()
  var userName = responses[0].getResponse() // this assumes the respondent name is the first field
  var userEmail = responses[1].getResponse() // this assumes the respondent name is the second field
  var toEmail = 'username@example.com'
  var subject = 'New Response in your form'
  var message =
    'Hello Champion, someone with the name ' +
    userName +
    ' just filled your Google Form using the email ' +
    userEmail +
    ' and you can view complete response at:\n ' +
    prefilledUrl +
    '.'

  MailApp.sendEmail(toEmail, subject, message)
}
