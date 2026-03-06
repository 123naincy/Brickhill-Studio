import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import CameraSuccess from "../components/sections/CameraSuccess";

function Contact() {

const recaptchaRef = useRef(null);
const navigate = useNavigate();

const [loading,setLoading] = useState(false);
const [showSuccess,setShowSuccess] = useState(false);
const [captchaValue,setCaptchaValue] = useState(null);

const [formData,setFormData] = useState({
name:"",
email:"",
mobileNumber:"",
message:""
});

const [errors,setErrors] = useState({});

const handleChange = (e)=>{

const {name,value} = e.target;

setFormData((prev)=>({
...prev,
[name]:value
}));

setErrors((prev)=>({
...prev,
[name]:""
}));

};

const validate = ()=>{

let newErrors = {};

if(!formData.name.trim()){
newErrors.name="Name is required";
}
else if(!/^[A-Za-z\s]+$/.test(formData.name)){
newErrors.name="Name should contain only alphabets";
}

if(!formData.email){
newErrors.email="Email is required";
}
else if(!/\S+@\S+\.\S+/.test(formData.email)){
newErrors.email="Invalid email format";
}

if(!formData.mobileNumber){
newErrors.mobileNumber="Mobile number is required";
}
else if(!/^[0-9]{10}$/.test(formData.mobileNumber)){
newErrors.mobileNumber="Enter valid 10 digit mobile number";
}

if(!formData.message.trim()){
newErrors.message="Message is required";
}
else if(formData.message.length<10){
newErrors.message="Message must be at least 10 characters";
}

setErrors(newErrors);

return Object.keys(newErrors).length===0;

};

const handleSubmit = async (e)=>{

e.preventDefault();

if(!validate()) return;

if(!captchaValue){
alert("Please verify reCAPTCHA");
return;
}

setLoading(true);

try{

await fetch(
"https://script.google.com/macros/s/AKfycbwInDSZ7ANO9r4N8xwKsyMNa0jqptFgui3w0IhLDjzi7Dxx4Gzw9KBUfSqVRku4OaG9wA/exec",
{
method:"POST",
body:JSON.stringify(formData)
}
);

setShowSuccess(true);

setFormData({
name:"",
email:"",
mobileNumber:"",
message:""
});

setCaptchaValue(null);

if(recaptchaRef.current){
recaptchaRef.current.reset();
}

setTimeout(()=>{
navigate("/thank-you");
},4000);

}
catch(error){
console.error(error);
}

setLoading(false);

};

return(
<>

<CameraSuccess show={showSuccess}/>

<section className="contact-section py-5" id="contact">

<Container>

<Row className="mb-5">
<Col lg={8} className="mx-auto text-center">
<h2 className="section-title">Get In Touch</h2>
<p className="section-subtitle">
Have a question? We'd love to hear from you.
</p>
</Col>
</Row>

<Row>
<Col lg={8} className="mx-auto">

<Form onSubmit={handleSubmit} className="contact-form">

<Row>

<Col md={6} className="mb-3">

<Form.Group>

<Form.Label className="text-light">Name</Form.Label>

<Form.Control
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Your name"
className="form-control-dark"
onKeyPress={(e)=>{
if(!/[A-Za-z\s]/.test(e.key)){
e.preventDefault();
}
}}
/>

{errors.name && (
<small className="text-danger">{errors.name}</small>
)}

</Form.Group>

</Col>

<Col md={6} className="mb-3">

<Form.Group>

<Form.Label className="text-light">Email</Form.Label>

<Form.Control
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Your email"
className="form-control-dark"
/>

{errors.email && (
<small className="text-danger">{errors.email}</small>
)}

</Form.Group>

</Col>

</Row>

<Form.Group className="mb-3">

<Form.Label className="text-light">
Mobile Number
</Form.Label>

<Form.Control
type="tel"
name="mobileNumber"
value={formData.mobileNumber}
onChange={handleChange}
placeholder="Mobile Number"
maxLength={10}
className="form-control-dark"
onKeyPress={(e)=>{
if(!/[0-9]/.test(e.key)){
e.preventDefault();
}
}}
/>

{errors.mobileNumber && (
<small className="text-danger">
{errors.mobileNumber}
</small>
)}

</Form.Group>

<Form.Group className="mb-4">

<Form.Label className="text-light">
Message
</Form.Label>

<Form.Control
as="textarea"
name="message"
value={formData.message}
onChange={handleChange}
placeholder="Your message"
rows={5}
className="form-control-dark"
/>

{errors.message && (
<small className="text-danger">{errors.message}</small>
)}

</Form.Group>

{/* RECAPTCHA */}

<div className="mb-3 text-center">

<ReCAPTCHA
ref={recaptchaRef}
sitekey="6LdvcYEsAAAAAP3ttcRcoVc09gLamV4gq21wTNSo"
onChange={(value)=>setCaptchaValue(value)}
/>

</div>

<div className="text-center">

<Button
type="submit"
className="btn-gradient"
disabled={loading}
>

{loading ? (
<>
<span className="spinner-border spinner-border-sm me-2"></span>
Sending...
</>
) : (
"Send Message"
)}

</Button>

</div>

</Form>

</Col>
</Row>

</Container>

</section>

</>
);
}

export default Contact;