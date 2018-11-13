var mailSubject = 'Documentation Feedback: ' + document.title; 
var topicFullPath = location.href;
var topicPathArray = topicFullPath.split("::");
var topicProj = topicPathArray[0].split("\\");
var chmPath=topicProj[topicProj.length-1] + topicPathArray[1];
var checkOutputType=topicFullPath.indexOf("http");
var topicPath = (checkOutputType==0) ?topicFullPath:chmPath;
var mailBody    = 'Re: ' + topicPath + '\nThank you for providing your suggestions to CaseWare. Your feedback is highly valued.\n\nWe will work to incorporate your feedback in our continuing efforts to improve your CaseWare experience.\n\n[Replace with comment here]\n\n\nRegards,\nCaseWare International Inc.'; 
var mailDisplay = 'Send Feedback';
document.write( 
   '<a href="mailto:documentation@caseware.com' 
   + '?subject=' + escape(mailSubject) 
   + '&body=' + escape(mailBody) 
   + '">' + mailDisplay + '</a>' 
   );