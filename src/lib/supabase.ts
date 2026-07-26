import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetches all rows from a Supabase table, bypassing the default 1000 row limit.
 * It uses pagination to retrieve all data.
 * 
 * @param table The name of the table to fetch from.
 * @param select The columns to select (default is '*').
 * @param pageSize The number of rows to fetch per request (default is 1000, max is usually 1000).
 * @returns An array containing all rows from the table.
 */
export async function fetchAllRows(table: string, select = '*', pageSize = 1000) {
  let allData: any[] = [];
  let fetchMore = true;
  let rangeStart = 0;

  while (fetchMore) {
    const rangeEnd = rangeStart + pageSize - 1;
    const { data, error, count } = await supabase
      .from(table)
      .select(select, { count: 'exact' })
      .range(rangeStart, rangeEnd);

    if (error) {
      console.error(`Error fetching data from ${table}:`, error);
      throw error;
    }

    if (data && data.length > 0) {
      allData = [...allData, ...data];
      rangeStart += pageSize;
      
      // If the number of returned rows is less than the page size, we've reached the end
      if (data.length < pageSize) {
        fetchMore = false;
      }
    } else {
      fetchMore = false;
    }
  }

  return allData;
}
