import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Managesignup from "../../Api/User/ManageSignup";
import Signup from "../../Pages/Users/Signup"

const useSignupHook = () => {
  const [societyData, setSocietyData] = useState([]);
  const [flatCode, setFlatCode] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    society_id: "",
    flat_id: "",
    role: "residence",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Fetch societies on mount
  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        setLoading(true);
        const res = await Managesignup.getSociety();

        if (res.code === 200) {
          setSocietyData(res.message);
        }
      } catch (err) {
        console.error("Error fetching societies:", err);
        toast.error("Failed to load societies.");
      } finally {
        setLoading(false);
      }
    };
    fetchSocieties();
  }, []);

  // ✅ Fetch flats by society ID
  const getFlatCodeBySocietyName = async (society_id) => {
    if (!society_id) return;
    try {
      setLoading(true);
      const res = await Managesignup.getFlatsCode(society_id);
      console.log(res);
      if (res.code === 200) {
        setFlatCode(res.message);
      }
    } catch (err) {
      console.error("Error fetching flats:", err);
      toast.error("Failed to load flats.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle signup form submit
  const handleOnSubmit = async (e) => {

    if (formData.username === "" || !isNaN(formData.username)) {
      toast.error("Invalid username")
    }
    else if (formData.email === "" || !isNaN(formData.email)) {
      toast.error("Invalid email")
    }
    else if (formData.phone === "") {
      toast.error("Invalid phone")
    }
    else if (formData.society_id === "") {
      toast.error("Invalid society name")
    }
    else if (formData.flat_id === "") {
      toast.error("Invalid flat code")
    }

    else {
      try {
        setLoading(true);
        const res = await Managesignup.userSignup(formData);

        if (res.code === 200) {
          toast.success(res.message);

        }

        else {
          toast.error(res.message);
        }
      } catch (err) {
        console.error("Signup error:", err);
        toast.error("Something went wrong during signup.");
      } finally {
        setLoading(false);
      }
    }
  };

  return <Signup societyData={societyData}
    flatCode={flatCode}

    handleOnChange={handleOnChange}
    getFlatCodeBySocietyName={getFlatCodeBySocietyName}
    handleOnSubmit={handleOnSubmit}
  ></Signup>
};

export default useSignupHook;
