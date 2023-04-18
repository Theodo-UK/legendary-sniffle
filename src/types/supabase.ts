export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      embedding: {
        Row: {
          id: number;
          input_text: string;
          input_url: string;
          usage_count: number;
          vector: string;
        };
        Insert: {
          id?: never;
          input_text: string;
          input_url: string;
          usage_count?: number;
          vector: string;
        };
        Update: {
          id?: never;
          input_text?: string;
          input_url?: string;
          usage_count?: number;
          vector?: string;
        };
      };
      items: {
        Row: {
          created_at: string;
          description: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: string;
          name?: string;
        };
      };
      nods_page: {
        Row: {
          checksum: string | null;
          id: number;
          meta: Json | null;
          parent_page_id: number | null;
          path: string;
          source: string | null;
          type: string | null;
        };
        Insert: {
          checksum?: string | null;
          id?: number;
          meta?: Json | null;
          parent_page_id?: number | null;
          path: string;
          source?: string | null;
          type?: string | null;
        };
        Update: {
          checksum?: string | null;
          id?: number;
          meta?: Json | null;
          parent_page_id?: number | null;
          path?: string;
          source?: string | null;
          type?: string | null;
        };
      };
      nods_page_section: {
        Row: {
          content: string | null;
          embedding: string | null;
          heading: string | null;
          id: number;
          page_id: number;
          slug: string | null;
          token_count: number | null;
        };
        Insert: {
          content?: string | null;
          embedding?: string | null;
          heading?: string | null;
          id?: number;
          page_id: number;
          slug?: string | null;
          token_count?: number | null;
        };
        Update: {
          content?: string | null;
          embedding?: string | null;
          heading?: string | null;
          id?: number;
          page_id?: number;
          slug?: string | null;
          token_count?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_page_parents: {
        Args: {
          page_id: number;
        };
        Returns: {
          id: number;
          parent_page_id: number;
          path: string;
          meta: Json;
        }[];
      };
      match_page_sections: {
        Args: {
          embedding: string;
          match_threshold: number;
          match_count: number;
          min_content_length: number;
        };
        Returns: {
          id: number;
          page_id: number;
          slug: string;
          heading: string;
          content: string;
          similarity: number;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
