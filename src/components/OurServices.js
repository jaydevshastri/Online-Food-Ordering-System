import React from "react";
import "../assets/styles/OurServices.css";
import chefImage from "../assets/images/chef_image.png";
import spoonImage from "../assets/images/spoon_image.png";

function OurServices() {
  return (
    <>
      <div className="container">
        <h1 className="align_center upper-service-heading">
          Our Best Services
        </h1>
        <div className="row">
          <div className="col-lg-4 align_center">
            <div className="service-box">
              <img
                src={chefImage}
                alt="Best Chef"
                className="img-fluid img-responsive "
              />
              <span className="service-heading">Best Chef</span>
              <p className="description-para">
                Chef is a trained professional cook and tradesman who is
                proficient in all aspects of food preparation, often focusing on
                a particular cuisine.
              </p>
            </div>
          </div>
          <div className="col-lg-4 align_center">
            <div className="service-box middle-service-box">
              <img
                src={spoonImage}
                alt="Quality Food"
                className="img-fluid img-responsive"
              />
              <span className="service-heading">Quality Food</span>
              <p className="description-para">
                Food may be essential as fuel for the body,but GOOD food is fuel
                for the soal.
              </p>
            </div>
          </div>
          <div className="col-lg-4 align_center">
            <div className="service-box">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD8/Pz39/f4+Pj09PQEBAQiIiIYGBjv7+8REREcHBzi4uLp6ekfHx+srKzZ2dkMDAzf39/FxcUnJyeGhoZOTk5iYmLOzs60tLSjo6NwcHDIyMhbW1tqamovLy9ISEiQkJCcnJw6Ojp+fn6Hh4eUlJR1dXU2Njanp6dDQ0O8vLxVVVUtLS2+LK9OAAAOG0lEQVR4nO1dCXfyKhMWkpDFpVqtS21durf6/v+/9w0JZB2ySRLP/XjOfa89iRIGhtkYJqORgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYFB35hcXiz4oEP3oyv4awI4W/9ZCucLQhgjZHHR2ix9vDx/7jevm8PH22WitemGuJAY66mOBoETrOXnH8lic7EGWgZfMIFJPx40tGjtXqPGWI7I7wFmko6ec714dW5pDuZoeyBq7P3wO32CZnvAV+P2lvYefkro483rXes1MEf68dyuKZib30UZfYJV9RJQia3GTuy8avoAV70UVMFHWImRUwvVuH2vRR9g3QUhahwKEo9j1lRtWN916QMcOqFEBScoSnWYxUUzwb7EhkkF1nalN4Rkw8cihSEe6zdEm0xgiB4U40SyIU3bNOlxrk/io9uUwO6X4ht/yoOcxzflQFeLG9DfD43pAyw7NeCoMKo+5FP2im7UEjcfbQgkf11S6K/kY37lpbyVLDD2K5qCJbhuRSAj8+4I3KYky4skGtXVjLxXDbR/bEUg6dK02WVEp+TDR5RCRjbljU3qWTFo411xac6VWNniOipQAZ9l6wUdl7q4ycBXY5p/TmQkgkT8wke6zBdQadJ6+OqGwudCn1ICFe+uUjlP2lPH8doNhU9FMiKBCmQqLOcfRVPTxS0zCOiGwjekVy9iFh1Flz/QluzxTeQBrE4oRGVDJFAp6g1HQ4DgdOMMdmabPoVxwyzSAhXrNrNzjVDudN2MjoTp6IoQEXvdXxiFDLRzVmVQpSnbBMuOKKRFR4CRJ9lzxdRkh5uOXm7SEwI6Y1Lbw/s1DoQWVCJHfBe3UI9ZApHQx7AURtb/UcouNPgkZ0nR+bRTTkHK6IAmLqUj+ypa/JPXfrHnSQtVIVDTcWIdi5DokzTTZN3t5TXMpYsZEbFQYc09JS3eZI2mUDuGUI4M171JmbhGBaq4iQpUkkQ9WjtMOVQ5nzXxlGn0IjppzwrPY+BGiLsbrD+xP6eJR7VZbTkH7lFM1AQT9w/iJv3BZlHMMCqK20Bl7zZFrllPSowX7KFlAlUuYg3GTARdTn7eYfiT1skzNospgZq/KaxIVNW0gq6ocH57EOZC0PiBUPhP/myXvykD8YqYVQtoUxa5dhkIVAEsSibiMnR0zt0Qon2pjUB9zlNRMEpbwpkhfkYcl9lkZnEtLpfufzaCvj02RKRIxwwJQzCyi+5RekxIZHJUlhoMboE3tLetUPQlQKBSFfUkDtWmBepYXNNjkIbQ6P8i2wonea8ghzikrZGyUL8KV27FSmNUnwbF9oUuoiNsW+wo9D4PHguIAVftbzQG0xtLxCYqVkYY38WBbilthVfi6CKQ6A3SUIo9QQTYqOUhwuMsWEiOTTgeLbfRcJw0Eoj2jMlBpHhcVwhUSaEY8HbbTCh2OikE/EOeMZYW6hIz3yKBKgwY4TrqiV1E0L0tg1oiJynNsCgxt6modJSF96uRSb+074++Yo+JYtmUIiISSH6/xjJ4WdJIO9ySO4cDd+qe5UhWxK+j/tj6CPzUTiDumLM4XO+UpqMJV1Wf36QrfpHFOzpNUiuV7gR+lw0SQUMeZWCgjLoAvtk3q9oC5hD5DDgpn1ZTCvULUgHMsmEyc4fiAjWC4GWck63RZ1N/Q0caMopXtCfx5qDa5oxCG/hcPTS35f6UPbwVCnaqyqmRTIXGgX9a7ENpCgRjUPg+Ml7iID4IB4tuo1ZDyMB2Iy59UvROCxRGSciFVKkOftQ/FpEI1MtUwO00nQ3dr2DElQIVT1UQwgjjRWm918juFs/qMtkrtM9ww0sGhfC7wls8F+/EUmpXvKeAfoM0TyQ2TYzn1ABGeHaFiJR+Fu8k8cBamzWslyR2p7glE2cln/GOKSl8TuajzGBIYaHf4i7CxyXm626nch0ElxaywlZJo1SVbZRDp4sw7su0rliQOEW/LEiazCY1GpfMQ7djr4tEsZeRlSYsn6ldI8Jx7lrKxPAb5mtFv8prS2GaTMVndSh1j/emA9CR02z3IRIPOSda7v4dNqLRqghAR6mIKiIbBCTijOzMNRmHmHPxETJfRf7CujcWDQlslmAvBERmVGTOwynJcCjdHF7T3o+PPpDaiVvCdElbn3KnJkz1E6a7OqG2IJb6wbx2Evp7kQKRsEXDNqTDh20qR9gMcwDYrh1hEYGjRKvLUKsIDAjNqIwY932mMkFNg/lJ0JP4T0K4RCSxeKfsjPyYad0LbQg68uvI1A95NjlmU5ns8A0ErI4/RymL8HhG7wd/s7ggpw+zUyDkDAxHvJksuJbrh6O78IKjNFEL4SyY30FLDfDJoYhXlEacnJJ4JXJz80qIdwyO7jFgD6K5ws83+QTqIeB/E8U8MiZMLRgJJz4ORgTN3GOarVaLYDZbyRBoPq+zH1u7GpNwrzsopDTwY0+i6/Yx1evoGv86zOFqNQYKhTShGZN3Pb2fUiL+eUHGQUFDRnqMl7lILFmp/SJv6rgKguM4iK04mUvF/99Z5LclLnmriyXGMk3FUoWV6o+jKV/9W4XeWLQXQZPN2O8+/Pn6oLZFqb/bC9eReV4YVKGWZdGQwMBbhP/IgZ+qtC0wYFaexy8sFuEPiM/bCFfnAnjhtcO4bxtQx3IcBzpI5w9PfyLOcaWcQMuywbtdeYHL/3k8uMovPhJvEQTBijEXRFCwCsgnXHf46anxgrx2dVikNRyLU+jYFP4DMv3JfLud26OIQLoms8XYhYXqLhbn6NvgaHhjF0AWnFtXxJ2Rie3wGX8hhy2Mzd2ImBBAmEMpTKINf4DchE9q25T3GK6A+eoGY+IuZvBphRNOl8CykfrgFAZjlwWL7xH/NrWmQJ/Tzamt1ojYCyiEP0BDO74DRMKEcg4dbQhQ53khheQBvmfDevuJKAQ1wSn0vBlhLpnASPFR4SM1NEk52FygWJygkMKQY2m43uzRZgFKxAV9wCk8gYiBb3NXMfBcwmYzFlEIf7uLzShswfLtsGzYPfEpDdchdE9QCHMQzh/w2h44M6FwC6uSTzSXni7IHuaShMIxmdPwPjRnw2L274lTw1kD+cEZjGeChRTCWhwdiLuKKQw21Oe3ePibAeeCSTPOULjmY2JFv3V8v5N8hLbgJHLaQu7kH7yXo9EeZspbMZCijAAVUytcaCLmBLKUG0EgRckKjLUZyNStzdcp/NgZ2fc1hwXQcKcml5r5FK6tsrjhj/z16M7WoQLZ4zYr6cluSxzKrg5NdoPMse9gF8+KOpzMtJ2D6QXndN9Tpz/K8/fuxSGsgTSBX2lHvZRAMhusw03xJfkOBExioND84izit6TRe0KyWfg9TUdzJ5XnuoI+dkFvRxzAP2QiZdNaBa/2d6Xpcch40jXjxjpVDBrj695VoQiFn7Zp/rT5yqy1lcMi3XLHiAh8zyhv2vRo7N/defkJwsQRNxuKf6iIjGM4aCln2wE4gV42DnjBcnBq4Ezvsbg0z0B8pmmzeVm7pGUB97gcX/KCcHvbqdife1uOS/LppxlrfvsRi/tajstDRllXGzC18Gnfy3KkdkbB1zNgauFuNjDSA13fgKkEqJkjWmlqONCRhZenuwGvdSqF9odnMfRa8XQ/gSmNh/Cy+L2X8NSjxlN4WfwbLlA1nWWsj/qVuRsg5PqhDICpB85AxjfvhlN/+0/fiyAK0B7S8YqqJJQWGC41KskjOadHeNr4YGEpPofbcAMCowonMn0iJpMvR00642PA2I2TPcmedQZ2isNeDbEf0vq2szF6fuo17g53YDUYN5vHIS1vG9uEeHJSPfL3t7Hqetj4Kc8EwrqfBK6B1PkNTvD7y7CeE3rOK8Qq4wxc2hTU5S7FwKmlvGC8mv9SSU20eTCRY7wb3A69lnYwu36c7ybLkX/zDrZo8LPdEgUj+bFR7Za3oZ0IGhKooJBffkMExMWtO48DGjASNFeOLQ/F+YEaR5pZ3oAZKs97r5xBjhP2Ey41nIpaWNDmfpJWENP9IBY3VdbQjzArCTi4FYyaWb9+eLzqdwCRWnGuq4yxKk6hvKaooWdxsX+1WEogq0iKKT+2ndjYaR3at2WDvB8hDUyMplBa/TIpCZF9x1y/xmlprJdVH8P6KxkgOTaXfNp/nxL1XEZgnVJxJVlfMnxftHeD/lzgr3KtPa6hq5XGjSwJjsWxxn0FhKtM6DrcpDi2HRfWwqu5VL5YSQ+qooSXWjIPjVGxuOiFIkzXy4sdqwqS1TQ/FMe2xfwrC353U+IrA4rVuUxhX09rYUX6SFLLRbGv2nVtmhAVUd5T7YbQaRIyqoRPuquBJVBRu9Jr4PIgVpGs5VK259H1tkWFHG1yFssp6Bx5ULZQ6jyNTcfGW3k1jCbmcbGguTBmacVK6NYzLqscx6qs0SxoofhbogpKC2J3u59fqir2TX24HMsnLF5aR7Nbb7isltOpsXuTraGdvBBK/eYvjk7L0ZVRGLRYH5lj2xm7usRwwl/hpgslXNriSGum9tlb9o4616hbs8ZRyvF2CQQJT3h5FlfqxE7jGer3ULWtg/ej7LfStujYS1RUHNu3DaLIV0Eg5XUUKyL/hjrtQCNQp/btCWbEDGo0dhy0eCd9Q3ASc4uxiTWaxzZsDvdIvvMhZ0a8Pja7C5vWtz31WrK2Ch7WXz+bGTld9e7fxDdcueMvqqCF0dz0FTHNvCfgRvXE93cC9e3tKkVgF2XYFZ2aJ7U5bs355K+O2JW0QX9j0+7Sa9T75eP6d/24aKn+U/Uyle3X5rTe74beL+0ONPdpYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYPB/jP8Bi4Ctcro0yBAAAAAASUVORK5CYII="
                alt="Perfect Cook"
                className="img-fluid img-responsive"
              />
              <span className="service-heading">Hygenic Food</span>
              <p className="description-para">
                Our goal is to create a food safety culture, not a Food safety
                program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
