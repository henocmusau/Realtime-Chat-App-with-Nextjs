'use client'
import { User } from '@supabase/supabase-js'
import React, { ChangeEvent, useState } from 'react'

export default function useSendersFilter(initialDatas: User[]) {
    const [search, setSearch] = useState('')

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    const filterSenders = () => {
        return initialDatas
            .filter(user =>
                user.user_metadata.full_name.toLowerCase().includes(search.toLowerCase())
            )
    }

    const filteredSenders = filterSenders()

    return {
        onInputChange, filteredSenders
    }
}
