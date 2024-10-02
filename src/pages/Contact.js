import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import Container from "../components/Container";
const Contact = () => {
  return<>
  <Meta title={"Contact Us"} />
  <BreadCrumb title="Contact Us" />
  <Container class1="contact-wrapper py-5 home-wrapper-2">
 
    <div className="row">
      <div className="col-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.642061720716!2d74.41354057556859!3d34.232156773089685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10872b4af8907%3A0xd4f8ee0cf871a9a0!2sUniversity%20of%20Kashmir%20North%20Campus!5e0!3m2!1sen!2sin!4v1726765968621!5m2!1sen!2sin"
       width="600"
        height="450" 
        className="border-0 w-100"
        allowFullScreen=""
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
         </iframe>
      </div>
      <div className="col-12 mt-5">
        <div className="contact-inner-wrapper d-flex justify-content-between">
        <div>
          <h3 className="contact-title mb-4">Contact</h3>
        <form action="" className="d-flex flex-column gap-15">
          <div>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div>
            <input type="email" className="form-control" placeholder="Email"/>
          </div>
          <div>
            <input type="tel" className="form-control" placeholder="Mobile Number" />
          </div>
          <div>
            <textarea name=""
             id=""
              className="w-100 form-control"
               cols="30"
                rows="4"
             placeholder="comments">
             </textarea>
          </div>
          <div>
            <button className="button border-0">Submit</button>
          </div>
        </form>
        </div>
        <div>
          <h3 className="contact-title mb-4">Get In Touch With Us</h3>
          <div>
            <ul className="ps-0">
              <li className="mb-3 d-flex gap-15 align-items-center">
                <FaHome className="fs-5"/>
                <address className="mb-0">North Campus,Delina Baramulla</address>
              </li>
              <li className="mb-3 d-flex gap-15 align-items-center">
                <IoCallOutline className="fs-5"/>
                <a href="tel:+91 7006945294">
                +91 7006945294
                </a>
              </li>
              <li className="mb-3 d-flex gap-15 align-items-center">
                <IoIosMail className="fs-5"/>
                <a href="mailto:zeeratrafiq@gmail.com">
                zeeratrafiq@gmail.com
                </a>
              </li>
              <li className="mb-3 d-flex gap-15 align-items-center">
                <MdInfoOutline className="fs-5"/>
                <p className="mb-0">Monday-Friday 10 AM-8 PM </p>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  </Container>
 
  </>;
};

export default Contact;