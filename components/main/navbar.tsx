'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const textToCopy = "CA: Coming Soon";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="https://lusion.co"
          className="flex items-center"
        >
          <Image
            src="/AustroLogo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">AstroLusion</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-around w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
         
        </div>
        <button
        className="hidden md:block relative text-gray-200 bg-[rgba(3,0,20,0.37)] px-3 py-1 rounded-md  transition hover:bg-[rgba(112,66,248,0.5)] w-auto"
          onClick={handleCopy}
        >
          <span className=" font-medium">
            { textToCopy }
            {/* <div className="astrolusion-lunch-component">
              <div className="timer">
                <div className="item">
                  <div className="hours">
                    <div className="hour">
                      <span>00</span><span>01</span><span>02</span><span>03</span>
                      <span>04</span><span>05</span><span>06</span><span>07</span>
                      <span>08</span><span>09</span><span>10</span><span>11</span>
                      <span>12</span><span>13</span><span>14</span><span>15</span>
                      <span>16</span><span>17</span><span>18</span><span>19</span>
                      <span>20</span><span>21</span><span>22</span><span>23</span>
                      <span>24</span>
                    </div>
                  </div>
                  <p>hour</p>
                </div>
                <span className="colon">:</span>
                <div className="item">
                  <div className="minutes">
                    <div className="min">
                      <span>00</span><span>01</span><span>02</span><span>03</span>
                      <span>04</span><span>05</span><span>06</span><span>07</span>
                      <span>08</span><span>09</span><span>10</span><span>11</span>
                      <span>12</span><span>13</span><span>14</span><span>15</span>
                      <span>16</span><span>17</span><span>18</span><span>19</span>
                      <span>20</span><span>21</span><span>22</span><span>23</span>
                      <span>24</span><span>25</span><span>26</span><span>27</span>
                      <span>28</span><span>29</span><span>30</span><span>31</span>
                      <span>32</span><span>33</span><span>34</span><span>35</span>
                      <span>36</span><span>37</span><span>38</span><span>39</span>
                      <span>40</span><span>41</span><span>42</span><span>43</span>
                      <span>44</span><span>45</span><span>46</span><span>47</span>
                      <span>48</span><span>49</span><span>50</span><span>51</span>
                      <span>52</span><span>53</span><span>54</span><span>55</span>
                      <span>56</span><span>57</span><span>58</span><span>59</span>
                      <span>60</span>
                    </div>
                  </div>
                  <p>min</p>
                </div>
                <span className="colon">:</span>
                <div className="item">
                  <div className="seconds">
                    <div className="sec">
                      <span>00</span><span>01</span><span>02</span><span>03</span>
                      <span>04</span><span>05</span><span>06</span><span>07</span>
                      <span>08</span><span>09</span><span>10</span><span>11</span>
                      <span>12</span><span>13</span><span>14</span><span>15</span>
                      <span>16</span><span>17</span><span>18</span><span>19</span>
                      <span>20</span><span>21</span><span>22</span><span>23</span>
                      <span>24</span><span>25</span><span>26</span><span>27</span>
                      <span>28</span><span>29</span><span>30</span><span></span>
                      <span>32</span><span>33</span><span>34</span><span>35</span>
                      <span>36</span><span>37</span><span>38</span><span>39</span>
                      <span>40</span><span>41</span><span>42</span><span>43</span>
                      <span>44</span><span>45</span><span>46</span><span>47</span>
                      <span>48</span><span>49</span><span>50</span><span>51</span>
                      <span>52</span><span>53</span><span>54</span><span>55</span>
                      <span>56</span><span>57</span><span>58</span><span>59</span>
                      <span>60</span>
                    </div>
                  </div>
                  <p>sec</p>
                </div>
              </div>
            </div> */}

          </span>
          {copied && (
            <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] text-[rgba(112,66,248,0.5)] bg-gray-800 px-1 py-0.5 rounded">
              Copied!
            </span>
          )}
        </button>


        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
           
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};