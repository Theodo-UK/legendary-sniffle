export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      items: {
        Row: {
          created_at: string
          description: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          name?: string
        }
      }
      embedding: {
        Row: {
          id: number
          input_text: string
          input_url: string
          usage_count: number
          vector: string
        }
        Insert: {
          id?: never
          input_text: string
          input_url: string
          usage_count?: number
          vector: string
        }
        Update: {
          id?: never
          input_text?: string
          input_url?: string
          usage_count?: number
          vector?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
