export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      campaigns: {
        Row: {
          brand_id: string
          budget: number | null
          campaign_goals: string | null
          content_type: string | null
          created_at: string | null
          description: string | null
          duration: number | null
          id: string
          influencer_type: string | null
          kpis: string | null
          platforms: string | null
          status: string | null
          target_audience: string | null
          timeline: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          brand_id: string
          budget?: number | null
          campaign_goals?: string | null
          content_type?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          influencer_type?: string | null
          kpis?: string | null
          platforms?: string | null
          status?: string | null
          target_audience?: string | null
          timeline?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          brand_id?: string
          budget?: number | null
          campaign_goals?: string | null
          content_type?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          influencer_type?: string | null
          kpis?: string | null
          platforms?: string | null
          status?: string | null
          target_audience?: string | null
          timeline?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      influencer_applications: {
        Row: {
          bio: string | null
          created_at: string | null
          email: string
          engagement_rate: number | null
          follower_count: number | null
          full_name: string
          id: string
          location: string | null
          niche: string | null
          phone: string | null
          portfolio_url: string | null
          social_media_handles: Json | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          email: string
          engagement_rate?: number | null
          follower_count?: number | null
          full_name: string
          id?: string
          location?: string | null
          niche?: string | null
          phone?: string | null
          portfolio_url?: string | null
          social_media_handles?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          email?: string
          engagement_rate?: number | null
          follower_count?: number | null
          full_name?: string
          id?: string
          location?: string | null
          niche?: string | null
          phone?: string | null
          portfolio_url?: string | null
          social_media_handles?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      influencers: {
        Row: {
          application_id: string | null
          bio: string | null
          created_at: string | null
          email: string
          engagement_rate: number | null
          follower_count: number | null
          full_name: string
          id: string
          is_active: boolean | null
          location: string | null
          niche: string | null
          phone: string | null
          portfolio_url: string | null
          social_media_handles: Json | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          application_id?: string | null
          bio?: string | null
          created_at?: string | null
          email: string
          engagement_rate?: number | null
          follower_count?: number | null
          full_name: string
          id?: string
          is_active?: boolean | null
          location?: string | null
          niche?: string | null
          phone?: string | null
          portfolio_url?: string | null
          social_media_handles?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          application_id?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string
          engagement_rate?: number | null
          follower_count?: number | null
          full_name?: string
          id?: string
          is_active?: boolean | null
          location?: string | null
          niche?: string | null
          phone?: string | null
          portfolio_url?: string | null
          social_media_handles?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "influencers_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "influencer_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_type: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          user_type?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_type?: string | null
        }
        Relationships: []
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
