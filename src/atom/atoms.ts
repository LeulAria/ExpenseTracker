import { User } from '@supabase/supabase-js';
import { atomWithImmer } from 'jotai/immer'

export const userAtom = atomWithImmer<User | null>(null);