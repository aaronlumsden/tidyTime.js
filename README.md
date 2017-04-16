tidyTime.js
===========

A jQuery plugin, that provides a more friendly way of displaying time updates to users!

tidyTime.js takes any regular time and changes it into more human friendly dialogue such as "It's just gone noon. It's quarter past 8 in the evening, it's nearly half past 4 in the afternoon, it's just gone 25 to 6" and more. By adding additional text before and after the time you are able to create powerful friendly interaction with users.

tidyTime.js works best with dynamic websites and apps and can be used as a stand alone clock. Here are some examples.

<table id="demo_table">
    						<tbody>
								<tr>
									<td><code>08:15</code></td>
									<td>becomes</td>
									<td>"Howdy Aaron! It's a quarter past 8"</td>

								</tr>
								<tr>
									<td><code>5:45</code></td>
									<td>becomes</td>
									<td>"Wakey wakey! It's a quarter to 6 in the morning"</td>
								</tr>	
								<tr>
									<td><code>14:29</code></td>
									<td>becomes</td>
									<td>"It's nearly half past 2"</td>
								</tr>
								<tr>
									<td><code>16:55</code></td>
									<td>becomes</td>
									<td>"You recieved this message at 5 to 5"</td>
								</tr>
								<tr>
									<td><code>16:33</code></td>
									<td>becomes</td>
									<td>"It's 27 minutes to 5. You're gonna be late!"</td>
								</tr>
								<tr>
									<td><code>20:00</code></td>
									<td>becomes</td>
									<td>"It's 8 o'clock and 3 of your friends shared this on Twitter"</td>
								</tr>
								<tr>
									<td><code>12:01</code></td>
									<td>becomes</td>
									<td>"It's just gone 12 noon. Lets create some music!"</td>
								</tr>

								<tr>
									<td><code>13:45</code></td>
									<td>becomes</td>
									<td>"This blog was posted at a quarter to 4"</td>
								</tr>

							</tbody>
						</table>
                        
## ..:: Getting Started

### Include the relevant files

Firstly include jQuery and tidyTime.js files.

<pre >&lt;script type=&quot;text/javascript&quot; src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;tidyTime.js&quot;&gt;&lt;/script&gt;</pre>

### Instantiate the plugin

Create an element such as a div or span and add a class or ID of your choice.
<pre>&lt;span class=&quot;tidyTime&quot;&gt;&lt;/span&gt;</pre>

In it's most basic form tidyTime can be actioned with no options passed and will just display the current time in tidyTime format.

<pre>
$(document).ready(function ($) {

   $('.tidyTime').tidyTime();	

});</pre>

If you want to instantiate the plugin with options then you can do so like:

<pre >
$('.tidyTime').tidyTime({
    	time: '08:15',
		before:'It\'s ',
		after:' and I\'m feeling good!',
		periodOfDay: true,
		callback:tidyTimeFunction
	});</pre>
    
### Options

<table>
    						<thead>
								<tr>
									<th>Variable</th>
									<th>Default Value</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>time</td>
									<td>the current time</td>
									<td>The time that you would like to convert. In format <code>mm:hh</code></td>
								</tr>
								<tr>
									<td>before</td>
									<td></td>
									<td>The text string to be used before tidyTime</td>
								</tr>
								<tr>
									<td>after</td>
									<td></td>
									<td>The text string to be used after tidyTime</td>
								</tr>
								<tr>
									<td>periodOfDay</td>
									<td></td>
									<td>Whether to append the period of day to tidyTime. <br>Phrases include 'in the morning','in the afternoon','in the evening','at night'</td>
								</tr>
								<tr>
									<td>callback</td>
									<td></td>
									<td>The name of the function that you would like pass as a callback once the time has been updated. On return three values are passed back to your function. the element, time and tidyTime</td>
								</tr>
							</tbody>
						</table>
### ..:: Using tidyTime.js as a Clock
tidyTime can be used as a clock. Simply instantiate it when the page is first loaded and then create a setInterval to update. The current time will automatically be calculated within the plugin.

<pre >
//HTML
&lt;span class=&quot;tidyTime&quot;&gt;&lt;/span&gt;

//Jquery
var tidyTime = $('.tidyTime');
tidyTime.tidyTime({
    	before:'Hey dude! It\'s ',
		after:' and I\'m feeling good!'
	});

setInterval(function(){

	tidyTime.tidyTime({
		before:'Hey dude! It\'s ',
		after:' and I\'m feeling good!'
	});

},30000);</pre>





