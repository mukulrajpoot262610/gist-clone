import { setAuth } from "@/global/authSlice";
import { getUserData } from "@/services/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function useLoadingWithRefresh() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
                    {
                        withCredentials: true,
                    }
                );
                const { data } = await getUserData();
                dispatch(setAuth(data));
                setLoading(false);
            } catch (err) {
                console.warn(err.message);
                setLoading(false);
            }
        })();
    }, [dispatch]);

    return { loading };
}